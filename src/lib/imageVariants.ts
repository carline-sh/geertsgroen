export const responsiveWidths = [320, 480, 640, 960, 1280, 1600, 1920];

export function buildResponsiveSources(src: string, sizes: string) {
    if (!src) {
        return {
            fallbackSrc: src,
            srcSet: '',
            webpSrcSet: '',
            sizes,
        };
    }

    const cleanSrc = src.trim();
    const lastDot = cleanSrc.lastIndexOf('.');
    const base = lastDot >= 0 ? cleanSrc.slice(0, lastDot) : cleanSrc;
    const extension = lastDot >= 0 ? cleanSrc.slice(lastDot + 1).toLowerCase() : 'jpg';

    const availableWidths = responsiveWidths.filter((width) => width < 2000);
    const fallbackSrcSet = availableWidths
        .map((width) => `${base}-${width}.${extension} ${width}w`)
        .join(', ');
    const webpSrcSet = availableWidths
        .map((width) => `${base}-${width}.webp ${width}w`)
        .join(', ');

    const defaultFallback = `${base}-${Math.min(1280, availableWidths[availableWidths.length - 1])}.${extension}`;

    return {
        fallbackSrc: defaultFallback,
        srcSet: fallbackSrcSet,
        webpSrcSet,
        sizes,
    };
}
