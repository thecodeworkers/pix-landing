import { linearCoordinatesValues, polygonValues, polygonStyles, linearStopValues } from "../../common";

const stopOneColors: Array<any> = [
  linearStopValues('0', '#000021'),
  linearStopValues('0.9508', '#161639')
];

const stopTwoColors: Array<any> = [
  linearStopValues('4.922280e-02', '#161639'),
  linearStopValues('1', '#000021')
];

const stopThreeColors: Array<any> = [
  linearStopValues('0', '#000021'),
  linearStopValues('0.9508', '#161639')
];

const stopFourColors: Array<any> = [
  linearStopValues('4.922280e-02', '#161639'),
  linearStopValues('1', '#000021')
];

const linearOneId = 'SVGID_ONE_1';
const linearTwoId = 'SVGID_TWO_1';
const linearThreeId = 'SVGID_THREE_1';
const linearFourId = 'SVGID_FOUR_1';

export const diamondDark: Array<any> = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('64.69', '57.255', '122.33', '57.255'),
    matrixCoordinates: null,
    stops: stopOneColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearOneId})`), 'st0', '64.7,3.8 122.3,71.3 64.7,110.7')
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('36.17', '355.5', '36.17', '446.68'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 518)',
    stops: stopTwoColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearTwoId})`), 'st1', '64.7,110.7 64.7,162.5 7.7,71.3')
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('93.51', '162.5', '93.51', '71.32'),
    matrixCoordinates: null,
    stops: stopThreeColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearThreeId})`), 'st2', '122.3,71.3 64.7,162.5 64.7,110.7')
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('36.17', '407.32', '36.17', '514.17'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 518)',
    stops: stopFourColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearFourId})`), 'st3', '64.7,3.8 7.7,71.3 64.7,110.7')
  },
];
