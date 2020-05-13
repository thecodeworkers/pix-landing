import React from 'react';
import './styles.scss';

export default ({ showLine, className }) => (
  <svg id="Layer_1" className={className} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 383.3 453.69">
   <defs>
      <linearGradient id="linear-gradientI" x1="191.13" y1="284.33" x2="357.6" y2="284.33" gradientUnits="userSpaceOnUse">
         <stop offset="0" stopColor="#e2e3e4"/>
         <stop offset="1" stopColor="#fff"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="190.87" y1="284.33" x2="357.85" y2="284.33" gradientUnits="userSpaceOnUse">
        {
          showLine ? (
            <>
              <stop offset="0" stopColor="#0099cd"/>
              <stop offset="0.02" stopColor="#13a1d1"/>
              <stop offset="0.07" stopColor="#44b4da"/>
              <stop offset="0.13" stopColor="#70c6e3"/>
              <stop offset="0.2" stopColor="#97d5eb"/>
              <stop offset="0.26" stopColor="#b7e2f1"/>
              <stop offset="0.33" stopColor="#d2edf6"/>
              <stop offset="0.41" stopColor="#e6f5fa"/>
              <stop offset="0.5" stopColor="#f4fbfd"/>
              <stop offset="0.6" stopColor="#fcfeff"/>
              <stop offset="0.78" stopColor="#fff"/>
            </>
          ) : null
        }
      </linearGradient>
      <linearGradient id="linear-gradient-3" x1="25.7" y1="142.83" x2="357.6" y2="142.83" gradientUnits="userSpaceOnUse">
         <stop offset="0" stopColor="#fff"/>
         <stop offset="1" stopColor="#d5d7d8"/>
      </linearGradient>
      <linearGradient id="linear-gradient-4" x1="191.65" y1="258.11" x2="191.65" y2="27.55" gradientUnits="userSpaceOnUse">
        {
          showLine ? (
            <>
              <stop offset="0" stopColor="#0099cd"/>
              <stop offset="0.03" stopColor="#18a3d2" stopOpacity="0.91"/>
              <stop offset="0.11" stopColor="#4eb8dc" stopOpacity="0.69"/>
              <stop offset="0.19" stopColor="#7ecbe6" stopOpacity="0.51"/>
              <stop offset="0.28" stopColor="#a6dbee" stopOpacity="0.35"/>
              <stop offset="0.37" stopColor="#c6e8f4" stopOpacity="0.22"/>
              <stop offset="0.47" stopColor="#e0f2f9" stopOpacity="0.12"/>
              <stop offset="0.59" stopColor="#f1fafc" stopOpacity="0.05"/>
              <stop offset="0.73" stopColor="#fcfefe" stopOpacity="0.01"/>
              <stop offset="0.97" stopColor="#fff" stopOpacity="0"/>
            </>
          ) : null
        }
      </linearGradient>
      <linearGradient id="linear-gradient-5" x1="25.7" y1="284.59" x2="191.65" y2="284.59" gradientUnits="userSpaceOnUse">
         <stop offset="0" stopColor="#e6e6e6"/>
         <stop offset="1" stopColor="#d5d7d8"/>
      </linearGradient>
      <linearGradient id="linear-gradient-6" x1="25.44" y1="284.59" x2="191.9" y2="284.59" gradientUnits="userSpaceOnUse">
        {
          showLine ? (
            <>
              <stop offset="0.26" stopColor="#fff"/>
              <stop offset="0.39" stopColor="#fcfeff"/>
              <stop offset="0.47" stopColor="#f4fbfd"/>
              <stop offset="0.53" stopColor="#e6f5fa"/>
              <stop offset="0.59" stopColor="#d2edf6"/>
              <stop offset="0.64" stopColor="#b7e2f1"/>
              <stop offset="0.69" stopColor="#97d5eb"/>
              <stop offset="0.73" stopColor="#70c6e3"/>
              <stop offset="0.78" stopColor="#44b4da"/>
              <stop offset="0.82" stopColor="#13a1d1"/>
              <stop offset="0.83" stopColor="#0099cd"/>
            </>
          ) : null
        }
      </linearGradient>
   </defs>
   <g className="cls1">
      <polygon className="cls2" points="191.13 257.8 191.65 425.82 357.6 307.74 357.6 142.83 191.13 257.8"/>
      <polygon className="cls3" points="191.13 27.86 25.7 143.35 191.13 257.8 357.6 142.83 191.13 27.86"/>
      <polygon className="cls4" points="25.7 143.35 28.34 305.31 191.65 425.82 191.13 257.8 25.7 143.35"/>
   </g>
  </svg>
);
