/**
 * @description Copies the given text to the clipboard.
 * @param {string} text - The text to copy.
 * @returns {Promise<void>} A promise that resolves when the text is copied.
 * @example
 * copyToClipboard("Hello, world!").then(() => {
 *  console.log("Text copied to clipboard!");
 * });
 */
function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}
