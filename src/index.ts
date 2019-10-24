async function main() {
  const { UniverseRenderer } = await import("../crate/pkg/index");
  const { memory } = await import("../crate/pkg/index_bg");

  const universe = new UniverseRenderer(10, 110);
  for (let i = 0; i < 10; i++) {
    const cells = new Uint8Array(memory.buffer, universe.cells_ptr(), 10);
    console.log(cells.join(" "));
    universe.tick();
  }
}

main();
