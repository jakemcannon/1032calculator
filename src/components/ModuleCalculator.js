import React, { useState } from "react";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';
import "fontsource-roboto";

// import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

function HookCounterThree() {
  const [module, setModule] = useState({
    moduleCompleted: "0",
  });
  let totalModules = 26;
  let currentDate = moment();
  // may 3rd by 11:59 pm
  var lastDate = moment("05/04/2021");


  let result = moment.duration(lastDate.diff(currentDate)).asDays();
  let AttemptsRemaining = Math.floor(result * 2);

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">

      <Container maxWidth="sm">
      <Box color="primary" bgcolor="text.disabled" borderRadius={7} borderColor="error.main" mt={7} mb={12}  p={2} style={{backgroundColor: '#EDEDED'}}> 
          Input the number of modules you have completed so far for chem 1032
          and you will recive the total number of attempts remaining and the
          average attempts per a module remaining. With a 12 hour waiting period this course becomes more stressful than 1031.
          Hopefully this helps plan and reduce stress for anytone struggling with this course!
      </Box>
      </Container>
      <Box mb={7}>
        <Typography variant="h3">
        How many modules have you completed?
      </Typography>
      <form>
      <TextField
        variant="outlined"
        type="text"
        value={module.moduleCompleted}
        onChange={(e) =>
          setModule({
            moduleCompleted: e.target.value,
          })
        }
      />
      </form>
      </Box>
      <Typography variant="h5">
        With {totalModules - module.moduleCompleted} modules remaining and{" "}
        {Math.floor(result)} days remaining in the semester{" "}
      </Typography>
      <Divider variant="middle" />
      <Typography variant="h5">
        {" "}
        You have {AttemptsRemaining} total attempts remaining{" "}
      </Typography>{" "}
      <Box mb={7}>
      <Typography variant="h5">
      That gives you an average of{" "}
        {((result * 2) / (totalModules - module.moduleCompleted)).toFixed(2)} attempts per
        remaining module{" "}
      </Typography>{" "}
      </Box>
    </Grid>
    </div>
  );
}

export default HookCounterThree;
