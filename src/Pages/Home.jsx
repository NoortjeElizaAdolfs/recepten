import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Home() {
    return(
        <>
        <Navbar/>
        <main className="banner">
            <div className="banner-info">
            <h1>WELKOM BIJ <br/>onze recepten pagina</h1>
            <Link to="/recepten">Recepten</Link>
            </div>
        </main>
        </>
    )
}
export default Home;