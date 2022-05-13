import { useReducer, useState } from 'react';

import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material';

function Prompts() {
  const [enteredPrompt, setEnteredPrompt] = useState();

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // setEnteredPrompt(e.target.value);
    console.log("input", enteredPrompt);
  };

  // const data = {
  //   prompt: "Write a poem about a dog wearing skis",
  //   temperature: 0.5,
  //   max_tokens: 64,
  //   top_p: 1.0,
  //   frequency_penalty: 0.0,
  //   presence_penalty: 0.0,
  // };

  // fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
  //   },
  //   body: JSON.stringify(data),
  // });

  return (
    <Box
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
          <form onSubmit={submitHandler}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter prompt"
                name="prompt"
                placeholder="Hi, I'm listening ..."
                multiline
                rows={4}
                helperText="TextField helper text"
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
          </form>
          <Grid item xs={12}>
            <Typography variant="h6">Responses</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Prompts;
