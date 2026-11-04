export function getStopColor(value: string) {
  const rgba = value.match(
    /^rgba\(\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)$/i,
  );

  if (!rgba) {
    return { color: value, opacity: undefined };
  }

  return {
    color: `rgb(${rgba[1].trim()}, ${rgba[2].trim()}, ${rgba[3].trim()})`,
    opacity: Number.parseFloat(rgba[4]),
  };
}
