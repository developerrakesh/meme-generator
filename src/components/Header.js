import React from "react";
import trollFace from "../images/Trollface.png";

class Header extends React.Component {
    render() {
        return(
            <header>
                <img src={trollFace} alt="Troll Face" />
                <p>Meme Generator</p>
            </header>
        )
    }
}

export default Header;