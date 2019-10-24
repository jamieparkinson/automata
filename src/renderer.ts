const CELL_WIDTH = 5;
const RGBA_CHANNELS = 4;

interface UniverseConstraints {
  size: number;
  iterations: number;
}

export const getUniverseConstraints = (): UniverseConstraints => {
  const { innerWidth, innerHeight } = window;
  return {
    size: Math.floor(innerWidth / CELL_WIDTH),
    iterations: Math.floor(innerHeight / CELL_WIDTH)
  }
};

interface Renderer {
  render: (cells: Uint8Array) => void;
}

const toRGBA = (binary: Uint8Array) => new Uint8Array(binary.length * RGBA_CHANNELS)
  .map((_, i) => i % 4 === 3 ? 0xFF : 0xFF * binary[Math.floor(i / RGBA_CHANNELS)]);

export const createRenderer = (constraints: UniverseConstraints): Renderer => {
  const canvas = document.getElementById("universe") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");
  canvas.width = constraints.size;
  canvas.height = constraints.iterations;

  let nRenders = 0;
  let imageArray = new Uint8ClampedArray(constraints.size * constraints.iterations * RGBA_CHANNELS).fill(0xFF);

  const shiftIn = (arr: Uint8Array) => {
    if (nRenders === constraints.iterations - 1) {
      imageArray.copyWithin(0, constraints.size * RGBA_CHANNELS);
    }
    imageArray.set(toRGBA(arr), constraints.size * nRenders * RGBA_CHANNELS);
  };

  return {
    render: (arr) => {
      shiftIn(arr);
      const imageData = new ImageData(imageArray, constraints.size, constraints.iterations);
      ctx.putImageData(imageData, 0, 0);
      if (nRenders < constraints.iterations - 1) {
        nRenders++;
      }
    }
  }
};
