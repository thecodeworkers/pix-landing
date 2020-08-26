import React from 'react';

const DiamonEth = () => (
  <svg xmlns="http://www.w3.org/2000/svg" id="diamondEth" width="100%" height="100%" viewBox="0 0 180.283 180.283">
  <defs>
    <linearGradient id="linear-gradientEth" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fbfbfb"/>
      <stop offset="1" stopColor="#aeaee6"/>
    </linearGradient>
    <filter id="Rectángulo_1577" x="0" y="0" width="180.283" height="180.283" filterUnits="userSpaceOnUse">
      <feOffset dy="20"/>
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feFlood floodColor="#aeaee6" floodOpacity="0.188"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <linearGradient id="linear-gradientEth-2" x1="0.925" y1="0.965" x2="0.087" y2="0.113" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#304352"/>
      <stop offset="1" stopColor="#8787b9"/>
    </linearGradient>
  </defs>
  <g id="Grupo_483" data-name="Grupo 483" transform="translate(-1526.613 -4915.113)">
    <g id="Grupo_197" data-name="Grupo 197" transform="translate(1571.613 4940.113)">
      <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1577)">
        <rect id="Rectángulo_1577-2" data-name="Rectángulo 1577" width="64.262" height="63.417" rx="3" transform="translate(89.84 25) rotate(45)" fill="url(#linear-gradientEth)"/>
      </g>
      <rect id="Rectángulo_1578" data-name="Rectángulo 1578" width="63.417" height="62.571" rx="3" transform="translate(45.44 0.598) rotate(45)" fill="url(#linear-gradientEth-2)"/>
    </g>
    <g id="Grupo_484" data-name="Grupo 484" transform="translate(1608.735 4971.694)">
      <path id="Trazado_106" data-name="Trazado 106" d="M332.035,315.042l-8.127-4.795,8.127,11.415h0l8.127-11.415Z" transform="translate(-323.908 -295.22)" fill="#fff"/>
      <path id="Trazado_107" data-name="Trazado 107" d="M332.038,69.421h0l8.127-4.807-8.127-13.483h0l-8.127,13.483,8.127,4.807Z" transform="translate(-323.911 -51.13)" fill="#fff"/>
    </g>
  </g>
</svg>

)

export default DiamonEth;