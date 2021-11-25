import Speaker from "./Speaker";

import { useSelector } from "react-redux";
 
function Speakergrid(props) {
 const speakers = useSelector((state) => state.meeting.speakers); 

  function addSpeakerHandler() {
    console.log("Add clicked");
  }

  return (
    <div className="speakergrid">
      {speakers.map((speaker) => (
        <Speaker
          name={speaker.name}
          role={speaker.role}
          fillerwords={speaker.fillerwords}
        />
      ))}
      <button onClick={addSpeakerHandler}>Add Speaker </button>
    </div>
  );
}

export default Speakergrid;
