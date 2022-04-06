import { Link } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'

// styles
const Why = styled.div`
h4 {
  margin-bottom: 0;
}
p {
  margin-top: 0.5em;
  color: grey;
}
div {
  margin-bottom: 20px;
}
`

// markup
const NotFoundPage = () => {
  return (
    <main className='p-20'>
      <title>Not found</title>
      <h1 className='text-4xl font-black mb-2'>Page not found</h1>
      <div>
        <p className='text-xl font-light mb-10'>
          Sorry{' '}
          <span aria-label="Pensive emoji" role="img">
            😔
          </span>{' '}
          we couldn’t find what you were looking for.
        </p>
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
        <Link className='underline decoration-wavy decoration-sky-500' to="/">Go home</Link>.
      </div>
    </main>
  )
}

export default NotFoundPage
