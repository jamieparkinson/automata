import { getUniverseConstraints, createRenderer } from "./renderer";
import { attachMouseDragListener } from "./utils";

const TICK_PERIOD_MS = 25;
const CELL_WIDTH = 2;

const canvas = document.getElementById("universe") as HTMLCanvasElement;
const constraints = getUniverseConstraints(CELL_WIDTH);
const renderer = createRenderer(canvas, constraints);

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

  const universe = new AutomataUniverse(constraints.size, 110);
  renderInitialCells(universe, memory.buffer);
  attachMouseDragListener(
    canvas,
    CELL_WIDTH,
    universe.perturb_cell.bind(universe)
  );

  const tick = () => {
    const cells = new Uint8Array(
      memory.buffer,
      universe.cells_ptr(),
      constraints.size
    );
    renderer.addGeneration(cells);
    universe.tick();
    setTimeout(tick, TICK_PERIOD_MS);
  };
  tick();
}

main();
