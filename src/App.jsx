import Router from "./Router";
import GlavPage from "./pages/GlavPage";
import ProNas from "./pages/ProNasPage/ProNas";
import NotFound from "./pages/NotFound";
import contats from "./pages/Contats";
import CabinetPage from "./pages/CabinetPage/RenderCabinetPage";

function App() {
    const routes = {
        "/": GlavPage,
        "/about": ProNas,
        "/contats": contats,
        "/Cabinet": CabinetPage,
        "*": NotFound,
    };

    return (
        <div className="wrapper">
            <Router routes={routes} />
        </div>
    );
}

export default App;