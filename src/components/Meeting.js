import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { meetingActions } from "../store/meetingSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

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
    return fillerwords
      .filter((element) => element.count !== 0)
      .sort((a, b) => b.count - a.count);
  }

  function JSONtoReport(meeting) {
    var text;
    text = "Club: " + meeting.club + "\n";
    text = text + "Meeting ID: " + meeting.meetingid + "\n";
    text = text + "Date: " + new Date().toISOString().slice(0, 10) + "\n";
    text = text + "Speakers: \n";
    text =
      text +
      meeting.speakers
        .map(
          (element) =>
            "\n\tName: " +
            element.name +
            "\n\tRole: " +
            element.role +
            "\n\tFiller words:\n" +
            element.fillerwords
              .filter((fw) => fw.count !== 0)
              .sort((a, b) => b.count - a.count)
              .map((fw) => "\t\t" + fw.word + ": " + fw.count)
              .join("\n")
        )
        .join("\n");

    return text;
  }

  function downloadHandler() {
    const element = document.createElement("a");
    const file = new Blob([JSONtoReport(meeting)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "ahcounter_report.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <Stack>
      <Stack
        spacing={4}
        direction="row"
        margin={2}
        justifyContent="space-between"
      >
        <TextField
          type="text"
          label="Club Name"
          InputProps={{
            readOnly: true,
          }}
          fullWidth
          value={meeting.club}
          onChange={clubnameChangeHandler}
        />
        <TextField
          type="text"
          label="Meeting ID"
          value={meeting.meetingid}
          onChange={meetingnumberChangeHandler}
        />

        <Button
          variant="contained"
          endIcon={<FileDownloadIcon />}
          onClick={downloadHandler}
        >
          Download
        </Button>
      </Stack>
    </Stack>
  );
}

export default Meeting;
