import { linearCoordinatesValues, polygonValues, polygonStyles, linearStopValues } from "../../common";

const stopOneColors: Array<any> = [
  linearStopValues('0', '#FFFFFF'),
  linearStopValues('1', '#C4C5C7')
];

const stopTwoColors: Array<any> = [
  linearStopValues('0', '#FFFFFF'),
  linearStopValues('1', '#C4C5C7')
];

const stopThreeColors: Array<any> = [
  linearStopValues('0', '#FFFFFF'),
  linearStopValues('1', '#C4C5C7')
];

const stopFourColors: Array<any> = [
  linearStopValues('0', '#FFFFFF'),
  linearStopValues('1', '#C4C5C7')
];

const linearOneId = 'SVGID_ONE_1';
const linearTwoId = 'SVGID_TWO_1';
const linearThreeId = 'SVGID_THREE_1';
const linearFourId = 'SVGID_FOUR_1';

export const diamondLight: Array<any> = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('64.7', '110.75', '122.3', '110.75'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 168)',
    stops: stopOneColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearOneId})`), 'st0', '64.7,3.8 122.3,71.3 64.7,110.7')
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('36.2', '436.5', '36.2', '345.3'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopTwoColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearTwoId})`), 'st1', '64.7,110.7 64.7,162.5 7.7,71.3')
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('93.5', '5.5', '93.5', '96.7'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 168)',
    stops: stopThreeColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearThreeId})`), 'st2', '122.3,71.3 64.7,162.5 64.7,110.7')
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('36.2', '384.7', '36.2', '277.8'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopFourColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearFourId})`), 'st3', '64.7,3.8 7.7,71.3 64.7,110.7')
  },
];
