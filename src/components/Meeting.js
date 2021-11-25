import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";

function Meeting(props) {
  const meeting = useSelector((state) => state.meeting);
  const dispatch = useDispatch();

  function clubnameChangeHandler(event) {
	dispatch(
		meetingActions.updateClubName({
		  name: event.target.value,
		})
	  );
  }
  function meetingnumberChangeHandler(event) {
	dispatch(
		meetingActions.updateMeetingnumber({
			meetingid: event.target.value,
		})
	  );
  }

  function formatFillerwords(fillerwords) {
	  return fillerwords.filter(
        (element) => element.count !== 0
      ).sort(
		  (a, b) =>  b.count - a.count
	  );
  }
  function downloadHandler() {
	  const data = JSON.stringify(meeting);
	  const jsondata = JSON.parse(data)
	  jsondata.date = (new Date()).toISOString().slice(0,10);

	  jsondata.speakers.forEach(element => {
		  element.fillerwords = formatFillerwords(element.fillerwords)
	  });

	  console.log(JSON.stringify(jsondata));

	  const element = document.createElement("a");
	  const file = new Blob([JSON.stringify(jsondata)], {type: 'text/plain'});
	  element.href = URL.createObjectURL(file);
	  element.download = "ahcounter_report.json";
	  document.body.appendChild(element); // Required for this to work in FireFox
	  element.click();
  }

  return (
    <div className="meeting">
      <div>
        <label>Club Name</label>
        <input type="text" value={meeting.club} onChange={clubnameChangeHandler} />
      </div>
	  <div>
        <label>Meeting Number</label>
        <input type="text" value={meeting.meetingid} onChange={meetingnumberChangeHandler} />
      </div>
      <button onClick={downloadHandler}>Download Report </button>
    </div>
  );
}

export default Meeting;
