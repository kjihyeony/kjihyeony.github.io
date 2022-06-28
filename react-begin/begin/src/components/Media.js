import { css, CSSObject, SimpleInterpolation } from "styled-components";


const sizes = {
  // Default styles written mobile-first assuming 320px width
  mbl: 375,
  tab: 700,
  desk: 990,
  deskL: 1200,
}

const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
          ${css(...args)};
      }
  `

  return acc
}, {})


export default Media;