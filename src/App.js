import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toolbar from "./components/Toolbar";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import SkaldytosMalkos from "./pages/SkaldytosMalkos";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import "./fonts/Tenor_Sans/TenorSans-Regular.ttf"
import ApvaliMediena from "./pages/ApvaliMediena";
import Azuolas from "./pages/Azuolas";
import Berzas from "./pages/Berzas";
import Alksnis from "./pages/Alksnis";

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
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/produktai/skaldytosMalkos" element={<SkaldytosMalkos />}/>
                        <Route path="/produktai/apvaliMediena" element={<ApvaliMediena />} />
                        <Route path="/produktai/skaldytosMalkos/azuolas" element={<Azuolas />} />
                        <Route path="/produktai/skaldytosMalkos/berzas" element={<Berzas />} />
                        <Route path="/produktai/skaldytosMalkos/alksnis" element={<Alksnis />} />

                    </Routes>
                </main>

                {/* Footer - Stays at the bottom */}
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
