import colors from 'theme/colors'
import typograph from 'theme/typograph'
import breakpoints from 'theme/breakpoints'
import animations from 'theme/animations'
import layouts from 'theme/layouts'

const s = {
  ...colors,
  ...typograph,
  ...breakpoints,
  ...animations
}

const c = {
  ...layouts
}

export { s, c }
