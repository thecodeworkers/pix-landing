import React from 'react';

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 160 140">
  <defs>
    <linearGradient id="send" x2="1.037" y2="0.975" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fff"/>
      <stop offset="1" stopColor="#f8f8f8"/>
    </linearGradient>
    <filter id="Rectángulo_1634" x="0" y="0" width="160" height="140" filterUnits="userSpaceOnUse">
      <feOffset dx="8" dy="11" />
      <feGaussianBlur stdDeviation="6.5" result="blur"/>
      <feFlood floodColor="#dbdbdb"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_307" data-name="Grupo 307" transform="translate(11.908 8.802)">
    <g transform="matrix(1, 0, 0, 1, -11.91, -8.8)" filter="url(#Rectángulo_1634)">
      <rect id="Rectángulo_1634-2" data-name="Rectángulo 1634" width="101" height="121" rx="10" transform="translate(132.5 8.5) rotate(90)" fill="url(#send)"/>
    </g>
    <path id="bxs-paper-plane" d="M2.99,19.52l5.693,2.492,16.405-8.95L15.193,24.606l14.182,6.458a1.622,1.622,0,0,0,.66.139,1.653,1.653,0,0,0,1.647-1.54L33.332,4.925a1.651,1.651,0,0,0-2.348-1.6L2.948,16.515a1.649,1.649,0,0,0,.041,3ZM11.895,34.5l7.876-3.819-7.876-3.674Z" transform="translate(40.626 23.784)" fill="#57d6af"/>
    <text id="Transferir" transform="translate(6.592 70.698)" fill="#444457" fontSize="13" fontFamily="Muli-Bold, Muli" fontWeight="700"><tspan x="21.6" y="13">Transferir</tspan></text>
  </g>
</svg>
)

export default SendIcon;
