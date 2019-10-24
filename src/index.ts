import { getUniverseConstraints, createRenderer } from "./renderer";

const TICK_PERIOD_MS = 100;

async function main() {
  const { AutomataUniverse } = await import("../crate/pkg/index");
  const { memory } = await import("../crate/pkg/index_bg");

  const constraints = getUniverseConstraints();
  const universe = new AutomataUniverse(constraints.size, 110);
  const renderer = createRenderer(constraints);

  setInterval(() => {
    const cells = new Uint8Array(memory.buffer, universe.cells_ptr(), constraints.size);
    renderer.render(cells);
    universe.tick();
  }, TICK_PERIOD_MS);
}

main();
