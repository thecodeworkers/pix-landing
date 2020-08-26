import React from 'react';

const UsdRectangle = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 393 120">
  <defs>
    <linearGradient id="usd-rectangle" x1="0.043" y1="0.5" x2="0.954" y2="0.473" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fff"/>
      <stop offset="1" stopColor="#dedede"/>
    </linearGradient>
    <filter id="Rectángulo_1635" x="0" y="0" width="393" height="120" filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="7.5" result="blur"/>
      <feFlood floodColor="#aeaee6" floodOpacity="0.361"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="usd-rectangle-2" x1="0.956" y1="0.034" x2="-0.223" y2="1.034" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fbfbfb"/>
      <stop offset="1" stopColor="#24c93f"/>
    </linearGradient>
    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.733" gradientTransform="matrix(0.986, 0.032, -0.032, 1.006, 0.023, -0.019)" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fff"/>
      <stop offset="1" stopColor="#fff"/>
    </radialGradient>
  </defs>
  <g id="Grupo_566" data-name="Grupo 566" transform="translate(22.456 19.382)">
    <g transform="matrix(1, 0, 0, 1, -22.46, -19.38)" filter="url(#Rectángulo_1635)">
      <rect id="Rectángulo_1635-2" data-name="Rectángulo 1635" width="348" height="75" rx="8" transform="translate(370.5 94.5) rotate(180)" fill="url(#usd-rectangle)"/>
    </g>
    <g id="Grupo_159" data-name="Grupo 159" transform="translate(5.51 5.068)">
      <rect id="Rectángulo_181" data-name="Rectángulo 181" width="68" height="66" rx="7" transform="translate(-0.466 0.05)" fill="url(#usd-rectangle-2)"/>
      <rect id="Rectángulo_183" data-name="Rectángulo 183" width="65" height="63" rx="6" transform="translate(2.534 0.05)" fill="url(#radial-gradient)"/>
    </g>
    <text id="Enviar_USD" data-name="Enviar USD" transform="translate(177.269 30.16)" fill="#4b677d" fontSize="14" fontFamily="Muli-SemiBold, Muli" fontWeight="600"><tspan x="20.776" y="14">Enviar USD</tspan></text>
    <path id="Trazado_540" data-name="Trazado 540" d="M11.241,0,9.2,2.044l7.737,7.737H0V12.7H16.935L9.2,20.438l2.044,2.044L22.482,11.241l-1.96-1.96Z" transform="translate(294.619 27.018)" fill="#24c93f"/>
    <path id="Trazado_563" data-name="Trazado 563" d="M28.947-218.942c0-.5,0-.918,0-1.334.023-2.051.242-2.213,2.253-2.221,1.3-.005,1.9.57,1.7,1.81-.219,1.394.348,2,1.65,2.464a5.672,5.672,0,0,1,3.586,4.093c.259.945-.087,1.578-1.088,1.661-1.311.109-2.509.2-3.214-1.455-.753-1.77-4.654-2.095-5.95-.671a2.248,2.248,0,0,0,.7,3.562,9.447,9.447,0,0,0,1.953.553c1.177.251,2.378.4,3.543.7,2.963.754,4.626,2.475,4.823,4.891.271,3.324-1,5.779-3.975,6.909-1.555.592-2.245,1.3-2.045,3,.157,1.334-.918,1.423-1.928,1.419-.993,0-2.128-.046-1.956-1.383.239-1.852-.583-2.494-2.226-2.988a5.82,5.82,0,0,1-3.86-4.051c-.3-.94-.612-1.875.629-2.376a2.718,2.718,0,0,1,3.322.907c1.221,2.541,2.628,3.266,5.371,2.7a2.717,2.717,0,0,0,2.435-2.66c.105-1.581-.815-2.289-2.178-2.594-1.531-.342-3.1-.546-4.607-.955-3.213-.87-4.711-2.656-4.841-5.581-.115-2.576,1.678-4.943,4.525-5.964C27.955-218.652,28.358-218.76,28.947-218.942Z" transform="translate(8.708 245.997)" fill="#4fb94b"/>
  </g>
</svg>



);

export default UsdRectangle;