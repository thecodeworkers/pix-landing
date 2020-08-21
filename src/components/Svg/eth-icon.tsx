import React from 'react';

const EthIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 146.494 146.494">
  <defs>
    <linearGradient id="ethicon-gradient" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fbfbfb"/>
      <stop offset="1" stop-color="#aeaee6"/>
    </linearGradient>
    <filter id="Rectángulo_1577" x="0" y="0" width="146.494" height="146.494" filterUnits="userSpaceOnUse">
      <feOffset dy="20"/>
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feFlood flood-color="#aeaee6" flood-opacity="0.188"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="ethicon-gradient-2" x1="0.925" y1="0.965" x2="0.087" y2="0.113" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#24333e"/>
      <stop offset="1" stop-color="#64648d"/>
    </linearGradient>
  </defs>
  <g id="Grupo_556" data-name="Grupo 556" transform="translate(45 25)">
    <g id="Grupo_197" data-name="Grupo 197" transform="translate(0)">
      <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1577)">
        <rect id="Rectángulo_1577-2" data-name="Rectángulo 1577" width="40.212" height="39.683" rx="3" transform="translate(73.06 25) rotate(45)" fill="url(#ethicon-gradient)"/>
      </g>
      <rect id="Rectángulo_1578" data-name="Rectángulo 1578" width="39.683" height="39.153" rx="3" transform="translate(28.434 0.374) rotate(45)" fill="url(#ethicon-gradient-2)"/>
    </g>
    <g id="Grupo_484" data-name="Grupo 484" transform="translate(23.229 19.762)">
      <path id="Trazado_106" data-name="Trazado 106" d="M328.994,313.247l-5.085-3,5.085,7.143h0l5.085-7.143Z" transform="translate(-323.908 -300.844)" fill="#fff"/>
      <path id="Trazado_107" data-name="Trazado 107" d="M329,62.575h0l5.085-3.008L329,51.13h0l-5.085,8.437L329,62.575Z" transform="translate(-323.911 -51.13)" fill="#fff"/>
    </g>
  </g>
</svg>
);

export default EthIcon;