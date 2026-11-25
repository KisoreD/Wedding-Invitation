import { useEffect, useState } from 'react'
import './App.css'
import coupleIllustration from './assets/couple-illustration.png'

const weddingDate = new Date('2027-01-24T07:00:00+05:30')
const venue = '10.903836, 78.696654'
function getTimeLeft() {
  const ms = Math.max(0, weddingDate.getTime() - Date.now())
  return { days: Math.floor(ms/86400000), hours: Math.floor(ms%86400000/3600000), minutes: Math.floor(ms%3600000/60000), seconds: Math.floor(ms%60000/1000) }
}
function Heading({eyebrow,title}) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><span>❦</span></div> }
function Event({kicker,title,time,period,weekday,day,featured}) {
  return <article className={'event-card '+(featured?'featured':'')}><p className="event-kicker">{kicker}</p><h3>{title}</h3><p className="event-time">{time} <small>{period}</small></p><div className="event-date"><span>{weekday}</span><strong>{day}</strong><span>January</span></div><p className="event-year">2027</p></article>
}
function App() {
  const [left,setLeft]=useState(getTimeLeft)
  useEffect(()=>{const id=setInterval(()=>setLeft(getTimeLeft()),1000);return()=>clearInterval(id)},[])
  const map=`https://www.google.com/maps?q=${encodeURIComponent(venue)}&output=embed`
  const directions=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue)}`
  return <div className="invitation">
    <header className="header"><a className="monogram" href="#home">S <span>&</span> G</a><nav><a href="#home">Home</a><a href="#events">Events</a><a href="#venue">Venue</a><a href="#families">Families</a></nav><a className="music" href="#music" onClick={e=>{e.preventDefault();alert('Background music will be added in the next step.')}}>♫ <span>Music</span></a></header>
    <main>
      <section className="hero" id="home"><div className="ornament">❧ ❦ ❧</div><p className="eyebrow">WITH THE BLESSINGS OF OUR FAMILIES</p><h1>Goutham <span>&</span> Sindhuja</h1><p className="subtitle">Together with our families, we invite you to celebrate our wedding</p>
      {coupleIllustration && <div className="portrait"><img src={coupleIllustration} alt="Illustrated bride and groom in traditional South Indian wedding attire"/></div>}
      <p className="hero-date">23 <span>&</span> 24 <small>JANUARY 2027</small></p><a className="gold-button" href="#events">Explore the invitation ↓</a><div className="ornament lower">✧ ❦ ✧</div></section>
      <section className="countdown"><p className="eyebrow">THE CELEBRATION BEGINS IN</p><h2>Counting down to forever</h2><div className="timer">{Object.entries(left).map(([k,v])=><div key={k}><strong>{String(v).padStart(2,'0')}</strong><span>{k}</span></div>)}</div></section>
      <section className="section" id="events"><Heading eyebrow="SAVE THE DATE" title="Wedding Celebrations"/><div className="events"><Event kicker="THE FIRST CELEBRATION" title="Engagement Ceremony" time="6:00" period="PM" weekday="Saturday" day="23"/><Event kicker="THE BIG DAY" title="Wedding Ceremony" time="7:00" period="AM" weekday="Sunday" day="24" featured/></div></section>
      <section className="section" id="venue"><Heading eyebrow="WE WOULD LOVE TO SEE YOU" title="Wedding Venue"/><div className="venue"><div><p className="eyebrow">JOIN US AT</p><h3>Our Wedding Venue</h3><p>{venue}</p><a className="gold-button" href={directions} target="_blank" rel="noreferrer">Get directions ↗</a><small>Verify the venue coordinates before publishing.</small></div><iframe title="Wedding venue map" src={map} loading="lazy"/></div></section>
      <section className="section" id="families"><Heading eyebrow="TOGETHER WITH OUR LOVED ONES" title="Our Families"/><div className="families"><article><span>✿</span><h3>Bride's Family</h3><p>Dhanabal V</p><p>Sujatha D</p></article><article><span>✿</span><h3>Groom's Family</h3><p>Kandasamy K.C</p><p>Sharmila K</p></article></div></section>
      <section className="closing"><div className="ornament">❧ ❦ ❧</div><h2>Your presence is our greatest blessing</h2><p>We look forward to celebrating these special moments with you.</p><h3>Goutham <span>&</span> Sindhuja</h3></section>
    </main><footer>Made with love for Goutham & Sindhuja · 23–24 January 2027</footer>
  </div>
}
export default App
