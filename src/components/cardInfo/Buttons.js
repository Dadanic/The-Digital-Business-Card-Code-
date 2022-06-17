import "./Buttons.css";
import linkedinIcon from "../../images/linkedin-icon.png";
import emailIcon from "../../images/email-icon.png";

export default function Buttons() {
    return (
        <div className="buttons">
            <div className="button">
                <div className="email"><img src={emailIcon}/> Email</div>
            </div>

            <div className="button">
                <div className="linkedin"><img src={linkedinIcon}/> Linkedin</div>
            </div>
        </div>
    );
}