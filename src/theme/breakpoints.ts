interface BreakValues {
  param1: string
  param2: string
  num1: string
  num2: string
}

export default {
  break: (num1: BreakValues) => `@media screen and (min-width: ${num1})`,
  breakMax: (num2: string) => `@media screen and (max-width: ${num2})`
  // breakMinMax: ({ param1, param2 }: BreakValues) =>
  //  `@media screen and (max-width: ${param2}) and (min-width: ${param1})`
}
