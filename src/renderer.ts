const RGBA_CHANNELS = 4;

interface UniverseConstraints {
  size: number;
  iterations: number;
}

export const getUniverseConstraints = (
  cellWidth: number
): UniverseConstraints => {
  const { innerWidth, innerHeight } = window;
  return {
    size: Math.ceil(innerWidth / cellWidth),
    iterations: Math.floor(innerHeight / cellWidth)
  };
};

interface Renderer {
  addGeneration: (cells: Uint8Array) => void;
  fillViewport: (allCells: Uint8Array) => void;
}

const toRGBA = (binary: Uint8Array) =>
  new Uint8Array(binary.length * RGBA_CHANNELS).map((_, i) =>
    i % 4 === 3 ? 0xff : 0xff * binary[Math.floor(i / RGBA_CHANNELS)]
  );

export const createRenderer = (
  canvas: HTMLCanvasElement,
  constraints: UniverseConstraints
): Renderer => {
  const ctx = canvas.getContext("2d");
  canvas.width = constraints.size;
  canvas.height = constraints.iterations;
  ctx.imageSmoothingEnabled = false;

  let imageArray = new Uint8ClampedArray(
    constraints.size * constraints.iterations * RGBA_CHANNELS
  ).fill(0xff);

  const shiftIn = (arr: Uint8Array) => {
    imageArray.set(
      arr,
      constraints.size * (constraints.iterations - 1) * RGBA_CHANNELS
    );
    imageArray.copyWithin(0, constraints.size * RGBA_CHANNELS);
  };

  const renderImageArray = () => {
    const imageData = new ImageData(
      imageArray,
      constraints.size,
      constraints.iterations
    );
    ctx.putImageData(imageData, 0, 0);
  };

  return {
    addGeneration: arr => {
      shiftIn(toRGBA(arr));
      renderImageArray();
    },
    fillViewport: arr => {
      imageArray = new Uint8ClampedArray(toRGBA(arr));
      renderImageArray();
    }
  };
};
