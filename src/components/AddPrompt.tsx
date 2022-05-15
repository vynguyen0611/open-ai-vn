import React, { useRef, useState } from 'react';

import { Box, Button, Container, Stack, TextField } from '@mui/material';

import { PromptItem } from '../models/promptItem';
import { AIResponse } from '../models/response';
import Responses from './Responses';

function AddPrompt() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [promptList, setPromptList] = useState<PromptItem[]>([]);

  const handleClick = async (event: React.MouseEvent) => {
    console.log("Submit button clicked!");
    event.preventDefault();

    const data = {
      prompt: inputRef.current?.value,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    async function postData(data = {}): Promise<AIResponse> {
      const response = await fetch(
        "https://api.openai.com/v1/engines/text-ada-001/completions",
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
        prompt: inputRef.current?.value || "",
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
            sx={{ backgroundColor: "#fff" }}
            name="prompt"
            placeholder="Hi, I'm listening ..."
            multiline
            rows={4}
            color="secondary"
            focused
            inputRef={inputRef}
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            size="medium"
            sx={{ mt: "10px", alignSelf: "flex-end" }}
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
