import { getUniverseConstraints, createRenderer } from "./renderer";

const TICK_PERIOD_MS = 25;

async function main() {
  const { AutomataUniverse } = await import("../crate/pkg/index");
  const { memory } = await import("../crate/pkg/index_bg");

  const constraints = getUniverseConstraints();
  const universe = new AutomataUniverse(constraints.size, 30);
  const renderer = createRenderer(constraints);

  const initialCells = new Uint8Array(
    constraints.iterations * constraints.size
  );
  for (let i = 1; i < constraints.iterations; i++) {
    universe.tick();
    const cells = new Uint8Array(
      memory.buffer,
      universe.cells_ptr(),
      constraints.size
    );
    initialCells.set(cells, i * constraints.size);
  }
  renderer.fillViewport(initialCells);

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
