import React from "react";
import "./footer.css";

function Footer(){
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            <p>Copyright @ {year}</p>
        </footer>
    )
}

export default Footer;