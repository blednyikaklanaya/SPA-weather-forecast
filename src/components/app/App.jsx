//imports

import WeatherCard from '../weather-card/WeatherCard'
import Header from '../header/Header'
import Footer from '../footer/Footer'
// components

import './App.css'
// styles

export default function App() {

  return (
    <>
      <Header />
      <section className='section-weather-card'>
        <WeatherCard />
      </section>
      <Footer />
    </>
  )
}