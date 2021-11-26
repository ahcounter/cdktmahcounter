import Fillerword from "./Fillerword";
import Speakerdetails from "./Speakerdetails";
import Addfillerword from "./Addfillerword";
import Grid from "@mui/material/Grid";
import { Stack, Divider } from "@mui/material";

function Speaker(props) {
  return (
    <Stack spacing={4}>
      <Speakerdetails id={props.id} name={props.name} role={props.role} />
      <Divider variant="middle" />
      <Grid container spacing={1}>
        {props.fillerwords.map((fillerword) => (
          <Grid item xs="auto">
            <Fillerword speakerid={props.id} word={fillerword.word} />
          </Grid>
        ))}
      </Grid>
      <Addfillerword speakerid={props.id} />
    </Stack>
  );
}

export default Speaker;
