export function splitText(text: string, maxTitleLength: number = 20) {
    const trimmed = text.trim();

    if (trimmed.length <= maxTitleLength) {
        return { title: trimmed, content: '' };
    }

    const slice = trimmed.slice(0, maxTitleLength);
    const lastSpace = slice.lastIndexOf(' ');

    const title = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
    const content = trimmed.slice(title.length).trim();

    return { title, content };
}