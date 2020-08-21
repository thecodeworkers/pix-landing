import React from 'react';

const BtcIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 213.417 213.417">
    <defs>
      <linearGradient id="btc-icon-gradient" x1="0.138" y1="0.177" x2="1.107" y2="1.183" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fbfbfb" />
        <stop offset="1" stop-color="#ff8008" />
      </linearGradient>
      <filter id="Rectángulo_1577" x="0" y="0" width="213.417" height="213.417" filterUnits="userSpaceOnUse">
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="15" result="blur" />
        <feFlood flood-color="#ff8008" flood-opacity="0.188" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
      <linearGradient id="btc-icon-gradient-2" x1="0.925" y1="0.965" x2="0.087" y2="0.113" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#ebb831" />
        <stop offset="1" stop-color="#f17807" />
      </linearGradient>
    </defs>
    <g id="Grupo_774" data-name="Grupo 774" transform="translate(-43.046 -359.578)">
      <g id="Grupo_559" data-name="Grupo 559" transform="translate(88.046 384.578)">
        <g id="Grupo_197" data-name="Grupo 197" transform="translate(0 0)">
          <g transform="matrix(1, 0, 0, 1, -45, -25)" filter="url(#Rectángulo_1577)">
            <rect id="Rectángulo_1577-2" data-name="Rectángulo 1577" width="87.847" height="86.691" rx="3" transform="translate(106.3 25) rotate(45)" fill="url(#btc-icon-gradient)" />
          </g>
          <rect id="Rectángulo_1578" data-name="Rectángulo 1578" width="86.691" height="85.535" rx="3" transform="translate(62.117 0.817) rotate(45)" fill="url(#btc-icon-gradient-2)" />
        </g>
        <path id="symbol" d="M150.735,103.179c.547-3.654-2.235-5.618-6.039-6.928L145.93,91.3l-3.013-.751-1.2,4.819c-.792-.2-1.605-.384-2.414-.568l1.21-4.851L137.5,89.2l-1.235,4.948c-.656-.149-1.3-.3-1.924-.452l0-.015-4.155-1.037-.8,3.218s2.235.512,2.188.544a1.6,1.6,0,0,1,1.4,1.752l-1.406,5.638a2.5,2.5,0,0,1,.313.1l-.318-.079-1.97,7.9a1.1,1.1,0,0,1-1.381.716c.03.044-2.19-.547-2.19-.547l-1.5,3.449,3.92.977c.729.183,1.444.374,2.148.554l-1.247,5.006,3.009.751,1.235-4.953c.822.223,1.62.429,2.4.623l-1.23,4.93,3.013.751,1.247-5c5.137.972,9,.58,10.626-4.066,1.31-3.741-.065-5.9-2.768-7.306a4.8,4.8,0,0,0,3.847-4.423Zm-6.883,9.652c-.931,3.741-7.23,1.719-9.272,1.212l1.654-6.632C138.276,107.92,144.825,108.929,143.852,112.831Zm.932-9.706c-.849,3.4-6.092,1.674-7.793,1.25l1.5-6.015C140.191,98.784,145.668,99.575,144.784,103.125Z" transform="translate(-75.864 -43.031)" fill="#fff" />
      </g>
    </g>
  </svg>
);

export default BtcIcon;