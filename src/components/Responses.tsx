import { useContext } from 'react';

import { Box, Container, Stack } from '@mui/material';

import { PromptsContext } from '../store/prompts-context';
import Response from './Response';

const Responses: React.FC = () => {
  const promptCtx = useContext(PromptsContext);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        px: { xs: "4px", md: "20px" },
        border: "0.5rem",
        borderBottomLeftRadius: "6px",
        borderBottomRightRadius: "6px",
        background: "#F9F5FA center top no-repeat",
        maxWidth: "800px",
        minHeight: "500px",
        margin: "auto",
      }}
    >
      <Container>
        {promptCtx.items.map((item, index) => {
          return (
            <Stack spacing={1} key={index}>
              <Response prompt={item.prompt} response={item.response} />
            </Stack>
          );
        })}
      </Container>
    </Box>
  );
};

export default Responses;
