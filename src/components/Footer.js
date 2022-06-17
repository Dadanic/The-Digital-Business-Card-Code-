import "./Footer.css";

import facebookIcon from "../images/facebook-icon.png";
import githubIcon from "../images/github-icon.png";
import instagramIcon from "../images/instagram-icon.png";
import twitterIcon from "../images/twitter-icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="imagesGroup">
                <img src={facebookIcon}/>
                <img src={githubIcon}/>
                <img src={instagramIcon}/>
                <img src={twitterIcon}/>
            </div>
        </div>
    );
}