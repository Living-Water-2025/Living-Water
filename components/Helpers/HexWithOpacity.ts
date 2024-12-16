export function hexWithOpacity(hex: string, opacity: number): string {
  // Remove the leading "#" if present
  hex = hex.replace(/^#/, "");

  // If shorthand notation like #123, convert it to #112233
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((h) => h + h)
      .join("");
  }

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return an rgba string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
