import { linearCoordinatesValues, polygonValues, polygonStyles, linearStopValues } from "../common";

const stopOneColors: Array<any> = [
  linearStopValues('0', '#0095C7'),
  linearStopValues('0.1614', '#1BA1BF'),
  linearStopValues('0.3968', '#3DB0B4'),
  linearStopValues('0.6212', '#55BBAD'),
  linearStopValues('0.8279', '#64C2A9'),
  linearStopValues('1', '#69C4A7')
];

const stopTwoColors: Array<any> = [
  linearStopValues('0', '#63B99E'),
  linearStopValues('0.7408', '#1D889E', '0.8518'),
  linearStopValues('1', '#04769E', '0.8')
];

const stopThreeColors: Array<any> = [
  linearStopValues('0', '#0098CC'),
  linearStopValues('1', '#69C4A7')
];

const stopFourColors: Array<any> = [
  linearStopValues('0', '#0082AE'),
  linearStopValues('2.516800e-02', '#0383AC'),
  linearStopValues('0.2989', '#258E9B'),
  linearStopValues('0.5597', '#3D968F'),
  linearStopValues('0.7999', '#4C9A88'),
  linearStopValues('1', '#519C85')
];

const linearOneId = 'SVGID_ONE_TURQUESE';
const linearTwoId = 'SVGID_TWO_TURQUESE';
const linearThreeId = 'SVGID_THREE_TURQUESE';
const linearFourId = 'SVGID_FOUR_TURQUESE';

const diamondTurquese: Array<any> = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('34.8167', '57.6167', '34.8167', '164.5167'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 168)',
    stops: stopOneColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearOneId})`), 'st0', '63.4,3.5 6.3,71 63.4,110.4')
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('63.3667', '330.9333', '120.9667', '330.9333'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopTwoColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearTwoId})`), 'st1', '63.4,3.5 121,71 63.4,110.4')
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('34.8167', '436.1833', '34.8167', '344.9833'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopThreeColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearThreeId})`), 'st2', '63.4,110.4 63.4,162.2 6.3,71')
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('92.1667', '436.1833', '92.1667', '344.9833'),
    matrixCoordinates: 'matrix(1 0 0 1 0 -274)',
    stops: stopFourColors,
    polygons: polygonValues(polygonStyles(null, `url(#${linearFourId})`), 'st3', '121,71 63.4,162.2 63.4,110.4')
  },
];

export default diamondTurquese;
