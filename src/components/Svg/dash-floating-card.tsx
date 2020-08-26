import React from 'react';

const DashFloatingCard = () => (

<svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 144 142">
  <defs>
    <linearGradient id="dash-flaoting" x1="0.923" y1="0.11" x2="-0.223" y2="1.034" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fbfbfb"/>
      <stop offset="1" stopColor="#0083b0"/>
    </linearGradient>
    <filter id="Rectángulo_1515" x="0" y="0" width="144" height="142" filterUnits="userSpaceOnUse">
      <feOffset dy="20" />
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feFlood floodColor="#0083b0" floodOpacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.739" gradientTransform="matrix(0.987, 0.032, -0.032, 0.997, 0.022, -0.015)" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fff"/>
      <stop offset="1" stopColor="#fff"/>
    </radialGradient>
  </defs>
  <g id="Grupo_529" data-name="Grupo 529" transform="translate(29.926 10.439)">
    <g id="Grupo_158" data-name="Grupo 158" transform="translate(0 0)">
      <g transform="matrix(1, 0, 0, 1, -29.93, -10.44)" filter="url(#Rectángulo_1515)">
        <rect id="Rectángulo_1515-2" data-name="Rectángulo 1515" width="84" height="82" rx="3" transform="translate(30 10)" fill="url(#dash-flaoting)"/>
      </g>
      <rect id="Rectángulo_1516" data-name="Rectángulo 1516" width="81" height="80" rx="3" transform="translate(3.074 -0.439)" fill="url(#radial-gradient)"/>
    </g>
    <g id="dash-5" transform="translate(31.708 30.903)">
      <g id="Grupo_352" data-name="Grupo 352" transform="translate(0)">
        <path id="Trazado_347" data-name="Trazado 347" d="M265.52,218.1H256.6l-.739,4.131,8.051.011c3.965,0,5.138,1.44,5.1,3.826a17.264,17.264,0,0,1-.777,3.965c-.611,1.787-1.866,3.83-6.57,3.822l-7.829,0-.743,4.135H262c3.14,0,4.474-.366,5.888-1.018,3.136-1.447,5-4.542,5.748-8.579,1.116-6.012-.271-10.29-8.116-10.29" transform="translate(-249.474 -218.1)" fill="#008de4"/>
        <path id="Trazado_348" data-name="Trazado 348" d="M160.176,426.8a2.628,2.628,0,0,0-2.891,2.443c-.29,1.206-.384,1.692-.384,1.692h9.133a2.628,2.628,0,0,0,2.891-2.443c.29-1.206.384-1.692.384-1.692Z" transform="translate(-156.9 -418.933)" fill="#008de4"/>
      </g>
    </g>
  </g>
</svg>




);

export default DashFloatingCard;