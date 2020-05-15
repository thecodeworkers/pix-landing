import styled, { keyframes } from 'styled-components';

const increse = (y1, y2) => keyframes`
0% {
  transform: translateY(${y1});
}

50% {
  transform: translateY(${y2});
}

100% {
  transform: translateY(${y1});
}
`;

export const PixelBox = styled.div`
  animation: ${props => increse(props.entryPoint, props.middlePoint)} 5s infinite;
`;
