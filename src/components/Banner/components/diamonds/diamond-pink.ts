import { linearCoordinatesValues, polygonValues, polygonStyles, linearStopValues } from "../common";

const stopOneColors: Array<any> = [
  linearStopValues('0', '#B12B4F'),
  linearStopValues('0.1047', '#B53456'),
  linearStopValues('0.4369', '#C04C67'),
  linearStopValues('0.7441', '#C75B71'),
  linearStopValues('1', '#C96075')
];

const stopTwoColors: Array<any> = [
  linearStopValues('0', '#B25262'),
  linearStopValues('0.2889', '#B04D5F'),
  linearStopValues('0.6356', '#AC3E57'),
  linearStopValues('1', '#A42749')
];

const stopThreeColors: Array<any> = [
  linearStopValues('0', '#A12547'),
  linearStopValues('0.1588', '#AC3450'),
  linearStopValues('0.4709', '#BC4C5E'),
  linearStopValues('0.7595', '#C65B67'),
  linearStopValues('1', '#CA606A')
];

const stopFourColors: Array<any> = [
  linearStopValues('0', '#942141'),
  linearStopValues('0.2464', '#922D47'),
  linearStopValues('0.6571', '#8F3C4E'),
  linearStopValues('1', '#8E4151')
];

const linearOneId = 'SVGID_ONE_PINK';
const linearTwoId = 'SVGID_TWO_PINK';
const linearThreeId = 'SVGID_THREE_PINK';
const linearFourId = 'SVGID_FOUR_PINK';

const diamondPink: Array<any> = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('36.2', '384.55', '36.2', '277.65'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopOneColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearOneId})`), 'st0', '64.7,3.7 7.7,71.2 64.7,110.6')
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('64.7', '110.9', '122.3', '110.9'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 168)',
    stops: stopTwoColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearTwoId})`), 'st1', '64.7,3.7 122.3,71.2 64.7,110.6')
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('36.2', '436.35', '36.2', '345.15'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopThreeColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearThreeId})`), 'st2', '64.7,110.6 64.7,162.4 7.7,71.2')
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('64.7', '51.25', '122.3', '51.25'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 168)',
    stops: stopFourColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearFourId})`), 'st3', '122.3,71.2 64.7,162.4 64.7,110.6')
  },
];

export default diamondPink;
