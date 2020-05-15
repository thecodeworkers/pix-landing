import { linearStopValues, linearCoordinatesValues, polygonValues } from './common';

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

const stopThreeColors = [
  linearStopValues('0', '#fff'),
  linearStopValues('1', '#d5d7d8')
];

const stopFourColors = [
  linearStopValues('0', '0099cd'),
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

const stopFiveColors = [
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

const linearOneId = 'linear-one-box2';
const linearTwoId = 'linear-two-box2';
const linearThreeId = 'linear-three-box2';
const linearFourId = 'linear-four-box2';
const linearFiveId = 'linear-five-box2';
const linearSixId = 'linear-six-box2';

export const linearGradientBox2 = [
  {
    linearId: linearOneId,
    coordinates: linearCoordinatesValues('191.13', '284.33', '357.6', '284.33'),
    stop: stopOneColors
  },
  {
    linearId: linearTwoId,
    coordinates: linearCoordinatesValues('190.87', '284.33', '357.85', '284.33'),
    stop: stopTwoColors
  },
  {
    linearId: linearThreeId,
    coordinates: linearCoordinatesValues('25.7', '142.83', '357.6', '142.83'),
    stop: stopThreeColors
  },
  {
    linearId: linearFourId,
    coordinates: linearCoordinatesValues('191.65', '258.11', '191.65', '27.55'),
    stop: stopFourColors
  },
  {
    linearId: linearFiveId,
    coordinates: linearCoordinatesValues('25.7', '284.59', '191.65', '284.59'),
    stop: stopFiveColors
  },
  {
    linearId: linearSixId,
    coordinates: linearCoordinatesValues('25.44', '284.59', '191.9', '284.59'),
    stop: stopSixColors
  },
]

export const polygon2 = [
  polygonValues({ opacity: 0.88, fill: `url(#${linearOneId})`, stroke: `url(#${linearTwoId})` }, 'cls2', '191.13 257.8 191.65 425.82 357.6 307.74 357.6 142.83 191.13 257.8'),
  polygonValues({ opacity: 0.88, fill: `url(#${linearThreeId})`, stroke: `url(#${linearFourId})` }, 'cls3', '191.13 27.86 25.7 143.35 191.13 257.8 357.6 142.83 191.13 27.86'),
  polygonValues({ opacity: 0.88, fill: `url(#${linearFiveId})`, stroke: `url(#${linearSixId})` }, 'cls4', '25.7 143.35 28.34 305.31 191.65 425.82 191.13 257.8 25.7 143.35'),
];
