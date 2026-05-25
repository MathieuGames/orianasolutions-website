/**
 * Converts **bold** markdown syntax to <strong> elements.
 * Used in blog posts, FAQ answers, and any content with inline bold.
 */
export function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
