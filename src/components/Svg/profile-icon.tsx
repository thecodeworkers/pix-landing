import React from 'react';

const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" viewBox="0 0 153 135">
  <defs>
    <linearGradient id="profile" x2="1.037" y2="0.975" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#fff"/>
      <stop offset="1" stopColor="#f8f8f8"/>
    </linearGradient>
    <filter id="Rectángulo_1634" x="0" y="0" width="153" height="135" filterUnits="userSpaceOnUse">
      <feOffset dx="8" dy="11" />
      <feGaussianBlur stdDeviation="6.5" result="blur"/>
      <feFlood floodColor="#dbdbdb"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Grupo_519" data-name="Grupo 519" transform="translate(11.502 8.11)">
    <g transform="matrix(1, 0, 0, 1, -11.5, -8.11)" filter="url(#Rectángulo_1634)">
      <rect id="Rectángulo_1634-2" data-name="Rectángulo 1634" width="96" height="114" rx="10" transform="translate(125.5 8.5) rotate(90)" fill="url(#profile)"/>
    </g>
    <text id="Perfil" transform="translate(7.998 61.39)" fill="#444457" fontSize="14" fontFamily="Muli-Bold, Muli" fontWeight="700"><tspan x="31.86" y="14">Perfil</tspan></text>
    <path id="bxs-user-plus" d="M7.2,12.336a7.125,7.125,0,0,0,7.284,7.284,7.125,7.125,0,0,0,7.284-7.284,7.125,7.125,0,0,0-7.284-7.284A7.125,7.125,0,0,0,7.2,12.336ZM6.162,34.079H26.973V32A10.417,10.417,0,0,0,16.568,21.593H12.406A10.417,10.417,0,0,0,2,32v2.081H6.162Z" transform="translate(43.721 17.13)" fill="#57d6af"/>
  </g>
</svg>
);

export default ProfileIcon;


