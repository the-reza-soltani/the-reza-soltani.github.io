/** Strip `**bold**` markers for plain-text UI surfaces. */
export function stripRichMarkers(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1')
}
