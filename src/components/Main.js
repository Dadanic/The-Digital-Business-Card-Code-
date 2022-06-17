import PersonInfo from "./cardInfo/PersonInfo";
import Buttons from "./cardInfo/Buttons";
import Paragraph from "./cardInfo/Paragraph";
import "./Main.css";
import { aboutParagraph, interestsParagraph } from "../constants/constants";

export default function Main() {
    return (
        <div className="main">
            <PersonInfo/>
            <Buttons/>
            <Paragraph title="About" paragraph={aboutParagraph}/>
            <Paragraph title="Interests" paragraph={interestsParagraph}/>
        </div>
    );
}