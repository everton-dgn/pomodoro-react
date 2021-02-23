interface BreakValues {
  param1: number
  param2: number
  num1: number
  num2: number
}

export default {
  break: (num1: BreakValues) => `@media screen and (min-width: ${num1}px)`,
  breakMax: (num2: BreakValues) => `@media screen and (max-width: ${num2}px)`,
  breakMinMax: ({param1, param2}: BreakValues) =>
    `@media screen and (max-width: ${param2}px) and (min-width: ${param1}px)`
}
