import { getUniverseConstraints, createRenderer } from "./renderer";
import {
  attachMouseDragListener,
  createStateReducer,
  linterp,
  populateRuleSelect
} from "./utils";

const CELL_WIDTH = 2;
const FUN_RULES = [110, 30, 106, 45, 126, 22, 105, 142];

const canvas = document.getElementById("universe") as HTMLCanvasElement;
const ruleSelect = document.getElementById("rule_select") as HTMLSelectElement;
const speedRange = document.getElementById("speed_range") as HTMLInputElement;
const randomizeButton = document.getElementById(
  "randomize_btn"
) as HTMLButtonElement;
const constraints = getUniverseConstraints(CELL_WIDTH);
const renderer = createRenderer(canvas, constraints);
const state = createStateReducer({
  tickPeriod: 25,
  rule: FUN_RULES[Math.floor(Math.random() * FUN_RULES.length)]
});

populateRuleSelect(ruleSelect, state.get().rule, FUN_RULES);
speedRange.min = "0";
speedRange.max = "60";
speedRange.value = "35";
const interpolateTickPeriod = linterp({ min: 0, max: 60 }, { min: 60, max: 0 });
speedRange.addEventListener("change", (e: Event) => {
  const tickPeriod = interpolateTickPeriod(
    parseInt((e.currentTarget as HTMLInputElement).value, 10)
  );
  state.update(() => ({ tickPeriod }));
});

const renderInitialCells = (
  universe: import("../crate/pkg/index").AutomataUniverse,
  memory: ArrayBuffer
) => {
  const initialCells = new Uint8Array(
    constraints.iterations * constraints.size
  );
  for (let i = 1; i < constraints.iterations; i++) {
    universe.tick();
    const cells = new Uint8Array(
      memory,
      universe.cells_ptr(),
      constraints.size
    );
    initialCells.set(cells, i * constraints.size);
  }
  renderer.fillViewport(initialCells);
};

async function main() {
  const { AutomataUniverse } = await import("../crate/pkg/index");
  const { memory } = await import("../crate/pkg/index_bg");

  const universe = new AutomataUniverse(constraints.size, state.get().rule);
  renderInitialCells(universe, memory.buffer);
  attachMouseDragListener(
    canvas,
    CELL_WIDTH,
    universe.perturb_cell.bind(universe)
  );
  ruleSelect.addEventListener("change", (e: Event) => {
    const newRule = parseInt((e.currentTarget as HTMLSelectElement).value, 10);
    universe.change_rule(newRule);
  });
  randomizeButton.addEventListener("click", () => {
    universe.randomize();
  });

  const tick = () => {
    const cells = new Uint8Array(
      memory.buffer,
      universe.cells_ptr(),
      constraints.size
    );
    renderer.addGeneration(cells);
    universe.tick();
    setTimeout(tick, state.get().tickPeriod);
  };
  tick();
}

main();
