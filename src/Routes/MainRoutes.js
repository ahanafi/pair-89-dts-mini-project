import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Navbar from "../Components/Navbar/Top/Navbar"
import Footer from '../Components/Footer/Footer'

const MainRoutes = () => {
    return (
        <>
            <Navbar />
                <div className="App">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </div>
            <Footer />
        </>
    )
}

export default MainRoutes;