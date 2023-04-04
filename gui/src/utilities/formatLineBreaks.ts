export function formatLineBreaks(input: string): string {
    return input.replaceAll('\r\n', '<br>');
}