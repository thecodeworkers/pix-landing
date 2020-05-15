export const linearCoordinatesValues = (x1: string, y1: string, x2: string, y2: string) => ({ x1, y1, x2, y2 });

export const linearGradientValues = (stop: Array<any>, coordinates: any) => ({ stop, coordinates });

export const linearStopValues = (offset: string, stopColor: string, stopOpacity: string = null) => ({
  offset, stopColor, stopOpacity
});

export const polygonValues = (style: any, className: string, points: string) => ({
  style,
  className,
  points
});
