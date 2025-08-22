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
        <div className="min-h-screen bg-[#0B0121] pb-5 flex flex-col font-montserrat">
            <Navbar />
            <div className="md:min-h-[1102px] bg-cover bg-center" style={{
                backgroundImage: `url(${Bghero})`,
            }}>
                <div
                    className="md:pt-24 pt-10"
                >
                    <Hero />
                </div>
            </div>
            <div className="pb-2 bg-[#0B0121]">
                <Trust />
                <Feature/>
                <PowerFull />
                <Footer />
            </div>
        </div>
    )
}

export default App
