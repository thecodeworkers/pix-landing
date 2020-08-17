import React from 'react';

const ArrowDown = ({color}) => (
  <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 104.048 106.135">
  <defs>
    <linearGradient id="linear-gradient" x1="0.042" y1="0.969" x2="0.814" y2="0.183" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#28c293"/>
      <stop offset="1" stop-color="#2c93c8"/>
    </linearGradient>
    <filter id="Trazado_530" x="0" y="0" width="104.048" height="106.135" filterUnits="userSpaceOnUse">
      <feOffset dx="3" dy="6" />
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#28c293" flood-opacity="0.239"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_775" data-name="Grupo 775" transform="translate(-904.229 -918.865)">
    <g id="Grupo_523" data-name="Grupo 523" transform="translate(916 924.666)">
      <g id="Grupo_488" data-name="Grupo 488" transform="translate(0 0)">
        <g id="Grupo_228" data-name="Grupo 228" transform="translate(0)">
          <g transform="matrix(1, 0, 0, 1, -11.77, -5.8)" filter="url(#Trazado_530)">
            <path id="Trazado_530-2" data-name="Trazado 530" d="M5.767,0H62.281a5.857,5.857,0,0,1,5.767,5.944V64.191a5.857,5.857,0,0,1-5.767,5.944H5.767A5.857,5.857,0,0,1,0,64.191V5.944A5.857,5.857,0,0,1,5.767,0Z" transform="translate(15 12)" fill="url(#linear-gradient)"/>
          </g>
          <g id="Grupo_774" data-name="Grupo 774">
            <rect id="Rectángulo_1568" data-name="Rectángulo 1568" width="64.807" height="68.579" rx="4" transform="translate(6.47 5)" fill={color}/>
          </g>
        </g>
      </g>
    </g>
    <path id="Trazado_537" data-name="Trazado 537" d="M10.752,0,8.8,1.955l7.4,7.4H0v2.793H16.2l-7.4,7.4L10.752,21.5,21.5,10.752,19.629,8.877Z" transform="translate(964.999 956.037) rotate(90)" fill="#57d6af"/>
  </g>
</svg>

)

export default ArrowDown;