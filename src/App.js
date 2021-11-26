import Speakergrid from "./components/Speakergrid";
import Meeting from "./components/Meeting";
import { Alert, AppBar, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <AppBar>
        <Typography variant="h3">
          &nbsp; Toastmasters <i>Ah!</i> Counter
        </Typography>
        <Alert severity="warning">
          Refreshing this page will lose the data entered!!! Download if you
          need to save it
        </Alert>
      </AppBar>
      <div style={{ marginTop: 150 }}>
        <Meeting />
        <Speakergrid />
      </div>
    </div>
  );
}

export default App;
