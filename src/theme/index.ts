import colors from 'theme/colors'
import typograph from 'theme/typograph'
import breakpoints from 'theme/breakpoints'
import transitions from 'theme/transitions'
import layouts from 'theme/layouts'

const s = {
  ...colors,
  ...typograph,
  ...breakpoints,
  ...transitions
}

const c = {
  ...layouts
}

export { s, c }
