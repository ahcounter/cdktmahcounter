import Speaker from "./Speaker";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";

function Speakergrid(props) {
  const speakers = useSelector((state) => state.meeting.speakers);
  const dispatch = useDispatch();

  function addSpeakerHandler() {
    dispatch(
      meetingActions.addSpeaker({
        name: "",
        role: "",
        fillerwords: [{
          word: 'Ah',
          count: 0
        },
        {
          word: 'Um',
          count: 0
        },
        {
          word: 'So',
          count: 0
        },
        {
          word: 'And',
          count: 0
        },
        {
          word: 'Like',
          count: 0
        },
        {
          word: 'You know',
          count: 0
        },
        {
          word: 'I mean',
          count: 0
        }],
      })
    );
  }

  return (
    <div className="speakergrid">
      {speakers.map((speaker, index) => (
        <Speaker
          id={index}
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
