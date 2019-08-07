/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react')

exports.onRenderBody = ( { setPostBodyComponents }) => {
  const scrollReveal = (
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
  )

  setPostBodyComponents(scrollReveal)
}