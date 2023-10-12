import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
    return(
        <>
        <Navbar/>
        <div className="banner">
            <div className="banner-info">
            <h1>WELKOM BIJ <br/>onze recepten pagina</h1>
            <a href="/recepten">Recept</a><br></br>
            </div>
        </div></>
    )
}
export default Home;