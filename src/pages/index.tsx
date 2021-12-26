import moment from 'moment'
import * as React from 'react'

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  padding: 96
}
const headingStyles = {
  marginBottom: 64,
  marginTop: 0,
  maxWidth: 320
}
const headingAccentStyles = {
  color: '#1C6DD0'
}
const paragraphStyles = {
  marginBottom: 48
}
const codeStyles = {
  backgroundColor: '#FFF4DB',
  borderRadius: 4,
  color: '#8A6534',
  fontSize: '1.25rem',
  padding: 4
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
}
const listItemStyles = {
  fontSize: 24,
  fontWeight: 300,
  marginBottom: 30,
  maxWidth: 560
}

const linkStyle = {
  color: '#344CB7',
  fontSize: 16,
  fontWeight: 'bold',
  verticalAlign: '5%'
}

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  lineHeight: 1.25,
  marginBottom: 0,
  marginTop: 10
}

const links = [
  {
    color: '#E95800',
    description:
      `Each and every person awaits the auspicious occasion of Lunar New Year ${moment().year() + 1}. This small application will help you to countdown to the Lunar New Year day.`,
    text: 'Countdown Lunar New Year',
    url: '/countdown'
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Hello!
        <br />
        <span style={headingAccentStyles}>My name is Thịnh.</span>
      </h1>
      <p style={paragraphStyles}>
        A <code style={codeStyles}>Front-end developer</code> from VietNam.{' '}
        <span aria-label="Sunglasses smiley emoji" role="img">
          😎
        </span>
      </p>

      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                href={link.url}
                style={linkStyle}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
