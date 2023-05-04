export const getFiboPivot61 = (high, low) => (((Number(high) - Number(low)) * 0.618) + Number(low));

export const getFiboPivot38 = (high, low) => (((Number(high) - Number(low)) * 0.382) + Number(low));

export const getFiboPivot50 = (high, low) => (((Number(high) - Number(low)) * 0.5) + Number(low));

export const getPredictedClosingValue = (pivot, high, low) => ((Number(pivot) * 3) - Number(high) - Number(low));

export const getPredictedBreakOut1 = (high, low) => (((Number(high) - Number(low)) * 1.382) + Number(low));

export const getPredictedBreakOut2 = (high, low) => (((Number(high) - Number(low)) * 1.618) + Number(low));

export const getPredictedBreakDown1 = (high, low) => (((Number(high) - Number(low)) * (-1.382)) + Number(high));

export const getPredictedBreakDown2 = (high, low) => (((Number(high) - Number(low)) * (-1.682)) + Number(high));