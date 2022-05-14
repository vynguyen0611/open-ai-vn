import { useContext } from 'react';

import { Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

function Responses() {
  return (
    <Stack spacing={3} sx={{ py: 2 }}>
      <Typography variant="h6" color="#1976d2">
        Responses
      </Typography>
      <Card sx={{ px: "10px", backgroundColor: "#DBE9DD" }}>
        <CardContent>
          <Stack py={1}>
            <Grid container>
              <Grid item xs={2}>
                <Typography
                  variant="subtitle1"
                  fontStyle="italic"
                  color="black"
                >
                  Prompt
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle1"
                  fontStyle="italic"
                  align="justify"
                >
                  Example JS code for sending requests?
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          <Stack py={1}>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="body1" fontStyle="bold" color="black">
                  Response
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography color="#274FD2" align="justify">
                  You should consider using environment variables or a key
                  manager to avoid committing your secret API key to your git
                  repository. Check the documentation for your hosting provider
                  for how to do this.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Responses;
