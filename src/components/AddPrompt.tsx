import React, { useContext, useRef, useState } from 'react';

import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';

import { PromptsContext } from '../store/prompts-context';

export type AIResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    text: string;
    index: number;
    logprobs: null;
    finish_reason: string;
  }[];
};

function AddPrompt() {
  const promptsCtx = useContext(PromptsContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [responseTitle, setResponseTitle] = useState(false);

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      alert("How can I help you?");
      return;
    }

    const data = {
      prompt: enteredText,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    async function postData(data = {}): Promise<AIResponse> {
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

    const responseData = await postData(data);
    setResponseTitle(true);

    promptsCtx.addPrompt(
      responseData.id,
      enteredText || "",
      responseData.choices[0].text,
      responseData.created
    );

    inputRef.current!.value = "";
  };

  return (
    <Box
      component="form"
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: "4px", md: "20px" },
        border: "0.5rem",
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        background: "#F9F5FA center top no-repeat",
        maxWidth: "800px",
        margin: "auto",
        marginTop: { xs: "10px", md: "20px" },
      }}
    >
      <Container sx={{ pt: "10px" }}>
        <Stack spacing={2}>
          <Typography variant="h6" align="center">
            Ask me!
          </Typography>
          <TextField
            fullWidth
            label="Enter prompt"
            sx={{ backgroundColor: "#ffffff" }}
            name="prompt"
            placeholder="Hi, I'm listening ..."
            multiline
            rows={3}
            color="secondary"
            focused
            inputRef={inputRef}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            size="medium"
            sx={{ alignSelf: "flex-end" }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </Stack>
        {responseTitle === true && (
          <Typography variant="body1" color="#1976d2" pt={1}>
            Responses
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default AddPrompt;
