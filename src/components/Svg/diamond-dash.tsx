import React from 'react';

const DiamonDash = () => (
<svg xmlns="http://www.w3.org/2000/svg" id="diamondDash" width="180.413" height="180.413" viewBox="0 0 180.413 180.413">
  <defs>
    <linearGradient id="linear-gradientDash" x1="0.34" y1="0.544" x2="0.957" y2="1.011" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fbfbfb"/>
      <stop offset="1" stop-color="#0083b0"/>
    </linearGradient>
    <filter id="Rectángulo_1577" x="0" y="0" width="180.413" height="180.413" filterUnits="userSpaceOnUse">
      <feOffset dy="20" />
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feFlood flood-color="#026d07" flood-opacity="0.11"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradientDash-2" x1="0.083" y1="-0.02" x2="0.971" y2="0.977" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#008de4"/>
      <stop offset="1" stop-color="#03629b"/>
    </linearGradient>
  </defs>
  <g id="Grupo_482" data-name="Grupo 482" transform="translate(45 25)">
    <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1577)">
      <rect id="Rectángulo_1577-2" data-name="Rectángulo 1577" width="64.355" height="63.508" rx="3" transform="translate(89.91 25) rotate(45)" fill="url(#linear-gradientDash)"/>
    </g>
    <rect id="Rectángulo_1578" data-name="Rectángulo 1578" width="63.508" height="62.661" rx="3" transform="translate(45.506 0.599) rotate(45)" fill="url(#linear-gradientDash-2)"/>
    <g id="dash-5" transform="translate(33.252 35.49)">
      <g id="Grupo_352" data-name="Grupo 352" transform="translate(0 0)">
        <path id="Trazado_347" data-name="Trazado 347" d="M265.017,218.1H256.46l-.709,3.964,7.725.011c3.8,0,4.93,1.382,4.9,3.671a16.567,16.567,0,0,1-.745,3.8c-.586,1.714-1.79,3.675-6.3,3.667l-7.512,0-.713,3.968h8.539a11.888,11.888,0,0,0,5.649-.977c3.009-1.389,4.8-4.358,5.516-8.232,1.071-5.769-.26-9.874-7.787-9.874" transform="translate(-249.621 -218.1)" fill="#fff"/>
        <path id="Trazado_348" data-name="Trazado 348" d="M160.043,426.8a2.522,2.522,0,0,0-2.774,2.344c-.278,1.157-.369,1.624-.369,1.624h8.763a2.522,2.522,0,0,0,2.774-2.344c.279-1.157.369-1.624.369-1.624Z" transform="translate(-156.9 -419.252)" fill="#fff"/>
      </g>
    </g>
  </g>
</svg>

)

export default DiamonDash;