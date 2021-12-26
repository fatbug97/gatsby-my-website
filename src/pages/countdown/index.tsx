import moment from 'moment'
import 'moment-lunar'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { CountdownPage, GlobalStyleCountdownPage } from './countdown.styles'

const countDownDate = moment().year(moment().year() + 1).month(0).date(1).solar().startOf('date').valueOf()

const CountDown = () => {
  useEffect(() => {
    const timeClock = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      document.getElementById('days').innerText = `${days}`
      document.getElementById('hours').innerText = `${hours}`
      document.getElementById('minutes').innerText = `${minutes}`
      document.getElementById('seconds').innerText = `${seconds}`

      if (distance < 0) {
        clearInterval(timeClock)
        document.getElementById('days').innerText = '0'
        document.getElementById('hours').innerText = '0'
        document.getElementById('minutes').innerText = '0'
        document.getElementById('seconds').innerText = '0'
      }
    }, 1000)
    return () => clearInterval(timeClock)
  }, [])
  return (
    <>
      <GlobalStyleCountdownPage />
      <Helmet>
        <meta content="Countdown Lunar New Year, Tết ([tet˧˥] or [təːt˧˥]), Vietnamese New Year, Vietnamese Lunar New Year or Tet Holiday, is the most important celebration in Vietnamese culture."
        name="description" />
        <title>Countdown Lunar New Year</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Mulish:wght@300&family=Pushster&display=swap"
          onLoad="this.onload=null;this.rel='stylesheet'"
          rel="preload"
        />
        <noscript>
          {`<link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Mulish:wght@300&family=Pushster&display=swap"
          />`}
        </noscript>
      </Helmet>
      <CountdownPage>
        <div className="content">
          <div className="heading">
            <p className="title">Countdown Lunar New Year</p>
            <p className="subtitle" id="today">Today: {moment().format('dddd DD/MM/YYYY')} | New year: {moment(countDownDate).format('dddd DD/MM/YYYY')}</p>
          </div>
          <div className="countdown">
            <div className="time">
              <div className="time-box">
                <p className="time-value" id="days"></p>
              </div>
              <p className="time-lable">Days</p>
            </div>
            <div className="time">
              <div className="time-box">
                <p className="time-value" id="hours"></p>
              </div>
              <p className="time-lable">Hours</p>
            </div>
            <div className="time">
              <div className="time-box">
                <p className="time-value" id="minutes"></p>
              </div>
              <p className="time-lable">Minutes</p>
            </div>
            <div className="time">
              <div className="time-box">
                <p className="time-value" id="seconds"></p>
              </div>
              <p className="time-lable">Seconds</p>
            </div>
          </div>
          <p className="note">
            Tết ([tet˧˥] or [təːt˧˥]), Vietnamese New Year, Vietnamese Lunar New
            Year or Tet Holiday, is the most important celebration in Vietnamese
            culture. The word is a shortened form of Tết Nguyên Đán (節元旦),
            which is Sino-Vietnamese for &quot;Feast of the First Morning of the
            First Day&quot;. Tết celebrates the arrival of spring based on the
            Vietnamese calendar, which usually has the date falling in January
            or February in the Gregorian calendar.
          </p>
        </div>
      </CountdownPage>
    </>
  )
}

export default CountDown
