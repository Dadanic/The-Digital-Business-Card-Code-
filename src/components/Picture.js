import pic from "../images/person.png";
import "./Picture.css";

export default function Picture() {
    return (
        <img className="picture" src={pic}/>
    );
}