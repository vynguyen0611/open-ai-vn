import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

function Prompts() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log("Entered");
  };

  const handleClick = (event: React.MouseEvent) => {
    console.log("Submit button clicked!");
  };

  const submitHandler = (event: React.FormEvent) => {
    console.log("Submitted!");
    event.preventDefault();
  };

  return (
    <Box
    component="form"
    onSubmit={submitHandler}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: "30px",
        border: "1px",
        borderRadius: "5px",
        background: "#F9F5FA center top no-repeat",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "60px",
      }}
    >
      <Typography variant="h6">Open AI</Typography>

      <TextField
        fullWidth
        label="Enter prompt"
        name="prompt"
        placeholder="Hi, I'm listening ..."
        multiline
        rows={4}
        // value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        variant="contained"
        disableElevation
        size="medium"
        sx={{ mt: "10px", alignContent: "flex-end" }}
        // onClick={handleClick}
      >
        Submit
      </Button>
      <Typography variant="h6">Responses</Typography>

      {/* <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        p: "30px",
        border: "1px",
        borderRadius: "5px",
        background: "#F9F5FA center top no-repeat",
        maxWidth: "900px",
        margin: "auto",
        marginTop: "60px",
      }}
    >
      <Container>
        <Grid container direction="column" spacing={1}>
        <Box component="form" onSubmit={submitHandler}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter prompt"
                name="prompt"
                placeholder="Hi, I'm listening ..."
                multiline
                rows={4}
                // value={enteredPrompt}
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sx={{ alignSelf: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                href="#"
                size="medium"
                sx={{ fontWeight: "500", fontSize: 18, zIndex: 1 }}
              >
                Submit
              </Button>
            </Grid>
          </Box>
          <Grid item xs={12}>
            <Typography variant="h6">Responses</Typography>
          </Grid>
        </Grid>
      </Container>
    {/* </form> */}
    </Box>
  );
}

export default Prompts;
