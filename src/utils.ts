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
