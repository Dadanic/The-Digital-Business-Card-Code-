import "./Paragraph.css";

export default function Paragraph(props) {
    return (
        <div className="paragraphSection">
            <h3 className="title">{props.title}</h3>
            <p className="paragraph">{props.paragraph}</p>
        </div>
    );
}