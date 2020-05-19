import { linearStopValues, linearCoordinatesValues, polygonValues, polygonStyles } from '../../common';

const stopOneColors: Array<any> = [
  linearStopValues('0', '#e2e3e4'),
  linearStopValues('1', '#fff')
];

const stopTwoColors: Array<any> = [
  linearStopValues('0', '#0099cd'),
  linearStopValues('0.02', '#13a1d1'),
  linearStopValues('0.07', '#44b4da'),
  linearStopValues('0.13', '#70c6e3'),
  linearStopValues('0.2', '#97d5eb'),
  linearStopValues('0.26', '#b7e2f1'),
  linearStopValues('0.33', '#d2edf6'),
  linearStopValues('0.41', '#e6f5fa'),
  linearStopValues('0.5', '#f4fbfd'),
  linearStopValues('0.6', '#fcfeff'),
  linearStopValues('0.78', '#fff')
];

const stopThreeColors: Array<any> = [
  linearStopValues('0', '#fff'),
  linearStopValues('1', '#d5d7d8')
];

const stopFourColors: Array<any> = [
  linearStopValues('0', '#0099cd'),
  linearStopValues('0.03', '#18a3d2', '0.91'),
  linearStopValues('0.11', '#4eb8dc', '0.69'),
  linearStopValues('0.19', '#7ecbe6', '0.51'),
  linearStopValues('0.28', '#a6dbee', '0.35'),
  linearStopValues('0.37', '#c6e8f4', '0.22'),
  linearStopValues('0.47', '#e0f2f9', '0.12'),
  linearStopValues('0.59', '#f1fafc', '0.05'),
  linearStopValues('0.73', '#fcfefe', '0.01'),
  linearStopValues('0.97', '#fff', '0')
];

const stopFiveColors: Array<any> = [
  linearStopValues('0', '#e6e6e6'),
  linearStopValues('1', '#d5d7d8')
];

const stopSixColors: Array<any> = [
  linearStopValues('0.26', '#fff'),
  linearStopValues('0.39', '#fcfeff'),
  linearStopValues('0.47', '#f4fbfd'),
  linearStopValues('0.53', '#e6f5fa'),
  linearStopValues('0.59', '#d2edf6'),
  linearStopValues('0.64', '#b7e2f1'),
  linearStopValues('0.69', '#97d5eb'),
  linearStopValues('0.73', '#70c6e3'),
  linearStopValues('0.78', '#44b4da'),
  linearStopValues('0.82', '#13a1d1'),
  linearStopValues('0.83', '#0099cd')
];

const linearOneId = 'linear-one-box10';
const linearTwoId = 'linear-two-box10';
const linearThreeId = 'linear-three-box10';
const linearFourId = 'linear-four-box10';
const linearFiveId = 'linear-five-box10';
const linearSixId = 'linear-six-box10';

export const boxLight: Array<any> = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('191.13', '284.33', '357.6', '284.33'),
    stops: stopOneColors,
    showStop: true
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('190.87', '284.33', '357.85', '284.33'),
    stops: stopTwoColors,
    showStop: false
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('25.7', '142.83', '357.6', '142.83'),
    stops: stopThreeColors,
    showStop: true
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('191.65', '258.11', '191.65', '27.55'),
    stops: stopFourColors,
    showStop: false
  },
  {
    linearId: linearFiveId,
    coordinates: linearCoordinatesValues('25.7', '284.59', '191.65', '284.59'),
    stops: stopFiveColors,
    showStop: true
  },
  {
    linearId: linearSixId,
    coordinates: linearCoordinatesValues('25.44', '284.59', '191.9', '284.59'),
    stops: stopSixColors,
    showStop: false
  },
];

export const polygonLight: Array<any> = [
  polygonValues(polygonStyles(0.88, `url(#${linearOneId})`, `url(#${linearTwoId})`, 0.51, 10), 'cls2', '191.13 257.8 191.65 425.82 357.6 307.74 357.6 142.83 191.13 257.8'),
  polygonValues(polygonStyles(0.88, `url(#${linearThreeId})`, `url(#${linearFourId})`, 0.51, 10), 'cls3', '191.13 27.86 25.7 143.35 191.13 257.8 357.6 142.83 191.13 27.86'),
  polygonValues(polygonStyles(0.88, `url(#${linearFiveId})`,  `url(#${linearSixId})`, 0.5, 10), 'cls4', '25.7 143.35 28.34 305.31 191.65 425.82 191.13 257.8 25.7 143.35'),
];
