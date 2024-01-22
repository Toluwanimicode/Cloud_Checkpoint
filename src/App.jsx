import './App.css'
import IntroSection from "./components/intro/intro"
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from "./components/disclaimer/disclaimer"
import FooterSection from "./components/footer/Footer"

function App() {

  return (
    <>
      <div className="App">
          <IntroSection />
          <ContactSection />
          <div className='container map'>
          <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=230%20Herbert%20Macaulay%20Wy,%20Alagomeji-Yaba,%20Lagos+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.versicherungen.at/private-krankenversicherung/'>Krankenversicherung vergleichen</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=42be2e0694d772e1aa887ff18fdc0c676afa1e82'></script>
          </div>
          <DisclaimerSection />
          <FooterSection />
      </div>
    </>
  )
}

export default App
