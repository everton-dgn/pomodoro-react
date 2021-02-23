import { keyframes } from 'styled-components'

export default {
  bouncedelay: keyframes`
    0%, 80%, 100% {
      transform: scale(0.0);
    }
    40% {
      transform: scale(1.0);
    }
  `
}
