export const attachMouseDragListener = (
  el: HTMLElement,
  cellWidth: number,
  listener: (cellIndex: number) => void
) => {
  let lastEventCellIndex = -1;
  const toCellIndex = (x: number) => Math.floor(x / cellWidth);

  const mouseMoveListener = (e: MouseEvent) => {
    const thisCellIndex = toCellIndex(e.pageX);
    if (thisCellIndex !== lastEventCellIndex) {
      listener(thisCellIndex);
      lastEventCellIndex = thisCellIndex;
    }
  };
  const mouseDownListener = (e: MouseEvent) => {
    lastEventCellIndex = toCellIndex(e.pageX);
    listener(lastEventCellIndex);
    el.addEventListener("mousemove", mouseMoveListener);
  };
  const mouseUpListener = () => {
    el.removeEventListener("mousemove", mouseMoveListener);
    lastEventCellIndex = -1;
  };

  el.addEventListener("mousedown", mouseDownListener);
  el.addEventListener("mouseup", mouseUpListener);

  return () => {
    el.removeEventListener("mousedown", mouseDownListener);
    el.removeEventListener("mouseup", mouseUpListener);
  };
};

interface StateReducer<T> {
  get: () => Readonly<T>;
  update: (f: (oldState: T) => Partial<T>) => void;
}

export const createStateReducer = <T extends object>(
  initialState: T
): StateReducer<T> => {
  let state = { ...initialState };
  return {
    update: f => {
      state = {
        ...state,
        ...f(state)
      };
    },
    get: () => Object.freeze({ ...state })
  };
};

const toRule = (n: number) => n.toString(2).padStart(8, "0");
const toNumber = (rule: string) => parseInt(rule, 2);
const MIRROR = { 0: 0, 4: 1, 2: 2, 6: 3, 1: 4, 5: 5, 3: 6, 7: 7 };
const mirrorRule = (rule: string) => {
  const original = rule.split("");
  const mirrored = original.slice();
  return mirrored.map((_, i) => original[MIRROR[i]]).join("");
};
const complementRule = (rule: string) => {
  const n = toNumber(rule);
  let t = 0;
  Array.from({ length: 8 }).forEach((_, i) => {
    t |= ((1 & (n >> (i ^ 7))) ^ 1) << i;
  });
  return toRule(t);
};
const obtainUniqueRules = () => {
  const initialRules = Array.from<number>({ length: 1 << 8 }).map((_, i) =>
    toRule(i)
  );
  const mirroredRules = initialRules.map(mirrorRule);
  const complementaryRules = initialRules.map(complementRule);
  const mirroredComplementaryRules = mirroredRules.map(complementRule);
  return [
    ...new Set(
      initialRules.map((_, i) =>
        Math.min(
          ...[
            initialRules[i],
            mirroredRules[i],
            complementaryRules[i],
            mirroredComplementaryRules[i]
          ].map(toNumber)
        )
      )
    )
  ];
};

export const populateRuleSelect = (
  el: HTMLSelectElement,
  initialRule: number
) => {
  obtainUniqueRules().forEach(rule => {
    const opt = document.createElement("option");
    opt.value = rule.toString(10);
    opt.text = rule.toString(10);
    el.appendChild(opt);
  });
  el.value = initialRule.toString(10);
};

export const linterp = (
  input: { min: number; max: number },
  output: { min: number; max: number }
) => (x: number) =>
  output.min + (x * (output.max - output.min)) / (input.max - input.min);
