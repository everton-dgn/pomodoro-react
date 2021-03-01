import { keyframes } from 'styled-components'

export default {
  zoom: keyframes`
    0% {
      transform: scale(0.0);
    } 
    70% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1.0);
    }
  `,

  glass: keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0);
    -webkit-backdrop-filter: blur(0);
  } 100% {
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.7rem);
    -webkit-backdrop-filter: blur(0.7rem);
  }
  `,

  moveUp: keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
  `
}
