import { useContext } from 'react';

import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

import { PromptsContext } from '../store/prompts-context';
import Response from './Response';

const Responses: React.FC = () => {
  const promptCtx = useContext(PromptsContext);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: "4px", md: "20px" },
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
        {promptCtx.items.map((item: any) => {
          return (
            <Stack spacing={1}>
              <Response
                key={item.id}
                prompt={item.prompt}
                response={item.response}
              />
            </Stack>
          );
        })}
      </Container>
    </Box>
  );
};

export default Responses;
