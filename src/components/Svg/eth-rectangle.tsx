import React from 'react';

const EthRectangle = () => (
<svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 393 120">
  <defs>
    <linearGradient id="eth-rectangle" x1="0.043" y1="0.5" x2="0.954" y2="0.473" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#dedede"/>
    </linearGradient>
    <filter id="Rectángulo_1635" x="0" y="0" width="393" height="120" filterUnits="userSpaceOnUse">
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="7.5" result="blur"/>
      <feFlood flood-color="#aeaee6" flood-opacity="0.361"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="eth-rectangle-2" x1="0.956" y1="0.034" x2="-0.223" y2="1.034" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fbfbfb"/>
      <stop offset="1" stop-color="#ac97d5"/>
    </linearGradient>
    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.768" gradientTransform="matrix(0.969, 0.031, -0.029, 0.961, 0.03, 0.004)" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="1" stop-color="#fff"/>
    </radialGradient>
  </defs>
  <g id="Grupo_777" data-name="Grupo 777" transform="translate(22.456 19.382)">
    <g id="Grupo_776" data-name="Grupo 776">
      <g transform="matrix(1, 0, 0, 1, -22.46, -19.38)" filter="url(#Rectángulo_1635)">
        <rect id="Rectángulo_1635-2" data-name="Rectángulo 1635" width="348" height="75" rx="8" transform="translate(370.5 94.5) rotate(180)" fill="url(#eth-rectangle)"/>
      </g>
    </g>
    <g id="Grupo_159" data-name="Grupo 159" transform="translate(5.51 5.068)">
      <rect id="Rectángulo_181" data-name="Rectángulo 181" width="68" height="66" rx="7" transform="translate(-0.466 0.05)" fill="url(#eth-rectangle-2)"/>
      <rect id="Rectángulo_183" data-name="Rectángulo 183" width="65" height="63" rx="6" transform="translate(2.534 0.05)" fill="url(#radial-gradient)"/>
    </g>
    <text id="Enviar_BTC" data-name="Enviar BTC" transform="translate(177.269 30.16)" fill="#4b677d" font-size="14" font-family="Muli-SemiBold, Muli" font-weight="600"><tspan x="23.506" y="14">Enviar ETH</tspan></text>
    <path id="Trazado_540" data-name="Trazado 540" d="M11.241,0,9.2,2.044l7.737,7.737H0V12.7H16.935L9.2,20.438l2.044,2.044L22.482,11.241l-1.96-1.96Z" transform="translate(294.619 27.018)" fill="#304352"/>
    <g id="Grupo_527" data-name="Grupo 527" transform="translate(29.711 20.992)">
      <path id="Trazado_106" data-name="Trazado 106" d="M333.323,315.8l-9.415-5.554,9.415,13.224h0l9.415-13.224Z" transform="translate(-323.908 -292.838)" fill="#444457"/>
      <path id="Trazado_107" data-name="Trazado 107" d="M333.325,72.319h0l9.414-5.569-9.414-15.62h0l-9.414,15.62,9.414,5.569Z" transform="translate(-323.911 -51.13)" fill="#444457"/>
    </g>
  </g>
</svg>


);

export default EthRectangle;