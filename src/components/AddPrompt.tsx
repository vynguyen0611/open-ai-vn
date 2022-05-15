import React, { useRef, useState } from 'react';

import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';

import { PromptItem } from '../models/promptItem';
import { AIResponse } from '../models/response';
import Responses from './Responses';

function AddPrompt() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [promptList, setPromptList] = useState<PromptItem[]>([]);
  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current?.value;

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

    console.log(data);

    const responseData = await postData(data);

    setPromptList((prevState: PromptItem[]) => {
      return prevState.concat({
        id: responseData.id,
        prompt: enteredText || "",
        response: responseData.choices[0].text,
        created: responseData.created,
      });
    });

    inputRef.current!.value = "";
  };

  const sortedList = promptList.sort(function (a: any, b: any) {
    return b.created - a.created;
  });

  return (
    <Box
      component="form"
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: "4px", md: "20px" },
        border: "0.5rem",
        borderRadius: "5px",
        background: "#F9F5FA center top no-repeat",
        maxWidth: "800px",
        minHeight: "630px",
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
        <Responses prompt={sortedList} />
      </Container>
    </Box>
  );
}

export default AddPrompt;
