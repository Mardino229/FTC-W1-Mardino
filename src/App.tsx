import './App.css'
import Bghero from"./assets/bghero.jpg";
import Navbar from "./components/layout/navbar.tsx";
import Hero from "./components/section/hero.tsx";
import Trust from "./components/section/trust.tsx";
import Feature from "./components/section/feature.tsx";
import PowerFull from "./components/section/powerfull.tsx";
import Footer from "./components/section/footer.tsx";

function App() {

  return (
      <div className="min-h-screen flex flex-col font-montserrat">
          <Navbar />
          <div
              className={`pb-10 md:pt-24 pt-10 bg-center bg-cover text-gray-300`}
              style={{
                  backgroundImage: `url(${Bghero})`,
              }
              }
          >
            <Hero />
            <Trust />
            <Feature/>
            <PowerFull />
            <Footer />
          </div>
      </div>
  )
}

export default App
