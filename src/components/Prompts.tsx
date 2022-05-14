import React, { useRef, useState } from 'react';

import {
    Box, Button, Card, CardContent, Container, Grid, Stack, TextField, Typography
} from '@mui/material';

import Responses from './Responses';

function Prompts() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // const handleClick = (event: React.MouseEvent) => {
  //   console.log("Submit button clicked!");
  // };

  async function postData(data = {}) {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  }

  const submitHandler = (event: React.FormEvent) => {
    console.log("Submitted!");
    event.preventDefault();

    // const enteredText = inputRef.current!.value;

    const data = {
      prompt: inputValue,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    console.log(data);

    postData(data)
      .then((resData) => {
        console.log("Success:", resData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      <Container>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Enter prompt"
            name="prompt"
            placeholder="Hi, I'm listening ..."
            multiline
            rows={4}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            size="medium"
            sx={{ mt: "10px", alignSelf: "flex-end" }}
          >
            Submit
          </Button>
        </Stack>
        <Stack spacing={3} sx={{ py: 2 }}>
          <Responses />
        </Stack>
      </Container>
    </Box>
  );
}

export default Prompts;
