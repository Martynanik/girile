import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from "./components/Toolbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import SkaldytosMalkos from "./pages/SkaldytosMalkos";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "./fonts/Tenor_Sans/TenorSans-Regular.ttf"
import ApvaliMediena from "./pages/ApvaliMediena";
import Miskininkyste from "./pages/Miskininkyste";
import MedienosRuosa from "./pages/MedienosRuosa";
import TransportoPaslaugos from "./pages/TransportoPaslaugos";
import SertifikataiIrProjektai from "./pages/SertifikataiIrProjektai";
function App() {
    return (
        <div className="flex flex-col min-h-screen"> {/* Flex container with full viewport height */}
            <BrowserRouter>
                {/* Toolbar (Header) */}
                <Toolbar />

                {/* Main content - this grows to take up remaining space */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/apie" element={<About />} />
                        <Route path="/apie/SertifikataiIrProjektai" element={<SertifikataiIrProjektai />} />
                        <Route path="/kontaktai" element={<Contacts />} />
                        <Route path="/paslaugos/miskininkyste" element={<Miskininkyste />} />
                        <Route path="/paslaugos/medienosRuosa" element={<MedienosRuosa />} />
                        <Route path="/paslaugos/transportoPaslaugos" element={<TransportoPaslaugos />} />
                        <Route path="/produktai/skaldytosMalkos" element={<SkaldytosMalkos />}/>
                        <Route path="/produktai/apvaliMediena" element={<ApvaliMediena />} />

                    </Routes>
                </main>

                {/* Footer - Stays at the bottom */}
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
