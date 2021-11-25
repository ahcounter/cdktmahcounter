import Fillerword from "./Fillerword";
import Speakerdetails from "./Speakerdetails";
import Addfillerword from "./Addfillerword";

function Speaker(props) {
  return (
    <div className="speaker">
      <Speakerdetails id={props.id} />

      <div className="fillerwordgrid">
        {props.fillerwords.map((fillerword) => (
          <Fillerword speakerid={props.id} word={fillerword.word} />
        ))}
      </div>
      <Addfillerword speakerid={props.id} />
    </div>
  );
}

export default Speaker;
