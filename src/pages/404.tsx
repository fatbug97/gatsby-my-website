import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  padding: '96px'
}
const headingStyles = {
  marginBottom: 64,
  marginTop: 0,
  maxWidth: 320
}

const paragraphStyles = {
  marginBottom: 48
}
const codeStyles = {
  backgroundColor: '#FFF4DB',
  borderRadius: 4,
  color: '#8A6534',
  fontSize: '1.25rem',
  padding: 4.5
}

const Why = styled.div`
h4 {
  margin-bottom: 0;
}
p {
  margin-top: 0.5em;
  color: grey;
}
`

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{' '}
        <span aria-label="Pensive emoji" role="img">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development'
          ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
            )
          : null}
        <br />
        <Why>
          <div>
            <h4>What happened?</h4>
            <p>The page you are trying to access cannot be found.</p>
          </div>
          <div>
            <h4>Why it happened?</h4>
            <p>
              The web server thinks that the HTTP data stream sent by the web
              browser was correct, but simply can not provide the access to the
              resource specified by your URL.
            </p>
          </div>
          <div>
            <h4>What can I do？</h4>
            <p>Please check with the site owner that the URL is correct.</p>
          </div>
        </Why>
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
