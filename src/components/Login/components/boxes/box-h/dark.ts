import { linearStopValues, linearCoordinatesValues, polygonValues, polygonStyles } from '../../common';

const stopOneColors: Array<any> = [
  linearStopValues('4.922280e-02', '#000023'),
  linearStopValues('1', '#000021')
];

const stopTwoColors: Array<any> = [
  linearStopValues('0', '#0098CC'),
  linearStopValues('3.481550e-02', '#0384B6'),
  linearStopValues('0.1052', '#076191'),
  linearStopValues('0.1814', '#0B4371'),
  linearStopValues('0.2632', '#0E2A56'),
  linearStopValues('0.3528', '#111742'),
  linearStopValues('0.4541', '#130A34'),
  linearStopValues('0.5772', '#14022C'),
  linearStopValues('0.7824', '#140029')
];

const stopThreeColors: Array<any> = [
  linearStopValues('4.922280e-02', '#0B183F'),
  linearStopValues('1', '#000021')
];

const stopFourColors: Array<any> = [
  linearStopValues('0.2591', '#08001C'),
  linearStopValues('0.4049', '#08021F'),
  linearStopValues('0.4924', '#080927'),
  linearStopValues('0.5644', '#071635'),
  linearStopValues('0.6281', '#062749'),
  linearStopValues('0.6863', '#053E64'),
  linearStopValues('0.7404', '#035A84'),
  linearStopValues('0.7905', '#027AA9'),
  linearStopValues('0.829', '#0098CC')
];

const stopFiveColors: Array<any> = [
  linearStopValues('4.922280e-02', '#0B183F'),
  linearStopValues('1', '#000021')
];

const stopSixColors: Array<any> = [
  linearStopValues('0', '#0098CC'),
  linearStopValues('5.189968e-02', '#0380B2'),
  linearStopValues('0.1383', '#065E8C'),
  linearStopValues('0.2317', '#09416C'),
  linearStopValues('0.3321', '#0C2951'),
  linearStopValues('0.442', '#0E173D'),
  linearStopValues('0.5663', '#0F0A2F'),
  linearStopValues('0.7172', '#100227'),
  linearStopValues('0.9689', '#100024')
];

const linearOneId = 'linear-one-box8';
const linearTwoId = 'linear-two-box8';
const linearThreeId = 'linear-three-box8';
const linearFourId = 'linear-four-box8';
const linearFiveId = 'linear-five-box8';
const linearSixId = 'linear-six-box8';

export const boxDark: Array<any> = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('191.13', '171.675', '357.6', '171.675'),
    matrixCoordinates: 'matrix(1 0 0 -1 0 456)',
    stops: stopOneColors,
    showStop: true
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('190.7957', '284.3298', '357.9338', '284.3298'),
    stops: stopTwoColors,
    matrixCoordinates: null,
    showStop: false
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('25.7', '171.415', '191.65', '171.415'),
    stops: stopThreeColors,
    matrixCoordinates: 'matrix(1 0 0 -1 0 456)',
    showStop: true
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('25.3557', '284.5943', '191.9858', '284.5943'),
    stops: stopFourColors,
    matrixCoordinates: null,
    showStop: false
  },
  {
    linearId: linearFiveId,
    coordinates: linearCoordinatesValues('25.7', '313.17', '357.6', '313.17'),
    stops: stopFiveColors,
    matrixCoordinates: 'matrix(1 0 0 -1 0 456)',
    showStop: true
  },
  {
    linearId: linearSixId,
    coordinates: linearCoordinatesValues('191.6512', '258.2057', '191.6512', '27.4536'),
    stops: stopSixColors,
    matrixCoordinates: null,
    showStop: false
  },
];

export const polygonDark: Array<any> = [
  polygonValues(polygonStyles(null, `url(#${linearOneId})`, `url(#${linearTwoId})`, 0.6676, 10), 'cls2', '191.1,257.8 191.6,425.8 357.6,307.7 357.6,142.8'),
  polygonValues(polygonStyles(null, `url(#${linearThreeId})`, `url(#${linearFourId})`, 0.6676, 10), 'cls3', '25.7,143.4 28.3,305.3 191.6,425.8 191.1,257.8'),
  polygonValues(polygonStyles(null, `url(#${linearFiveId})`,  `url(#${linearSixId})`, 0.6676, 10), 'cls4', '191.1,27.9 25.7,143.4 191.1,257.8 357.6,142.8')
];
