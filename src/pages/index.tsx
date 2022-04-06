import moment from 'moment'
import * as React from 'react'
import { Helmet } from 'react-helmet'

const links = [
  {
    background: 'https://studentexchange.vn/wp-content/uploads/2016/02/tet.jpg',
    backgroundSource:
      'A Family Gathering during Tet Holiday. Photo: tapchitaichinh',
    description: `Each and every person awaits the auspicious occasion of Lunar New Year ${
      moment().year() + 1
    }. This small application will help you to countdown to the Lunar New Year day.`,
    tag: ['web'],
    text: 'Countdown Lunar New Year',
    url: '/countdown'
  }
]

// markup
const IndexPage = () => {
  return (
    <main className="p-20">
      <Helmet>
        <title>My name is Thịnh</title>
      </Helmet>
      <h1 className="text-4xl font-black mb-10">
        Hello!
        <br />
        <span className="text-blue-700">
          My name is{' '}
          <span className="underline decoration-dashed decoration-blue-400">
            Thịnh
          </span>
          .
        </span>
      </h1>
      <p className="mb-20">
        A{' '}
        <code className="text-yellow-700 bg-yellow-100 p-1 text-lg">
          Front-end developer
        </code>{' '}
        from VietNam.{' '}
        <span aria-label="Sunglasses smiley emoji" role="img">
          😎
        </span>
      </p>

      <h2 className="text-3xl font-black mb-10 overline">App gallery</h2>

      <ul className="pl-0">
        {links.map((link) => (
          <a className="contents" href={link.url} key={link.url}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  alt="Sunset in the mountains"
                  className="w-full"
                  src={link.background}
                />
                <span className="absolute bottom-1 left-1 text-xs text-slate-700 bg-slate-200 p-1 rounded opacity-80">
                  {link.backgroundSource}
                </span>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{link.text}</div>
                <p className="text-gray-700 text-base">{link.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {link.tag.map((t) => (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={t}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
