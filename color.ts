/**
 * @description Generates a random hex color code.
 * @returns {string} A random hex color code.
 * @example
 * randomHexColor(); // "#a3c1e0"
 */
function randomHexColor(): string {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
}
