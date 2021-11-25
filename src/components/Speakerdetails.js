
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";

function Speakerdetails(props) {
  const dispatch = useDispatch();

  function nameChangeHandler(event) {
    dispatch(
      meetingActions.updateSpeakerName({
        id: props.id,
        name: event.target.value,
      })
    );
  }
  function roleChangeHandler(event) {
    dispatch(
      meetingActions.updateSpeakerRole({
        id: props.id,
        role: event.target.value,
      })
    );
  }

  function deleteSpeakerHandler() {
    dispatch(
      meetingActions.deleteSpeaker({
        id: props.id,
      })
    );
  }

  return (
    <div className="speaker">
      <div>
        <label>Name</label>
        <input type="text" value={props.name} onChange={nameChangeHandler} />
      </div>

      <div>
      <label>Role</label>
        <input type="text" value={props.role} onChange={roleChangeHandler} />
      </div>

      <div>
      <button onClick={deleteSpeakerHandler}>Delete Speaker</button>
      </div>
    </div>

  );
}

export default Speakerdetails;
