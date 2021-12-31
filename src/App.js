import TransportMode from "./components/TransportMode";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container style={{ marginTop: "95px", justifyContent: "center" }}>
      <Grid item xs={10} >
        <TransportMode />
      </Grid>
    </Grid>
  );
}

export default App;
