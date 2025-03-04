// Convert from Pixel to Meter
export function pxToM(pixels: number,
    pixelDensity?: number,
    resolution?: number,
    physicalSize?: number): number {
    if (pixelDensity !== undefined) {
        return pixels / pixelDensity;
    }
    else if (resolution !== undefined && physicalSize !== undefined) {
        const calculatedPixelDensity = resolution / physicalSize;
        return pixels / calculatedPixelDensity;
    }
    else {
        const defaultPixelDensity = 3779.52;
        return pixels / defaultPixelDensity;
    }

}

// Convert from Pixel to Inch
export function pxToInch(pixels: number,
    ppi?: number,
    resolution?: number,
    physicalSizeInches?: number): number {
    if (ppi !== undefined) {
        return pixels / ppi;
    } else if (resolution !== undefined && physicalSizeInches !== undefined) {

        const calculatedPPI = resolution / physicalSizeInches;
        return pixels / calculatedPPI;
    } else {
        const defaultPpi = 96;
        return pixels / defaultPpi;
    }

}

// Convert from Inch to Meter
export function inchToM(inches: number): number {
    const conversionFactor = 0.0254;
    return inches * conversionFactor;
}

// Convert from Meter to CM
export function mToCm(meters: number): number {
    const conversionFactor = 100;
    return meters * conversionFactor;
}

// Convert from Meter to MM
export function mToMm(meters: number): number {
    const conversionFactor = 1000;
    return meters * conversionFactor;
}

// Convert from Pixel to MM
export function pxToMm(pixels: number): number {
    const meters = pxToM(pixels);
    const mm = mToMm(meters);
    return mm;
}
