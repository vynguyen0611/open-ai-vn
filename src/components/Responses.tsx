import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';

function Responses(props: any) {
  return (
    <Stack spacing={3} sx={{ py: 2 }}>
      <Typography variant="body1" fontSize={"20px"} color="#1976d2">
        Responses
      </Typography>
      {props.prompt.map((item: any) => {
        return (
          <Card key={item.id} sx={{ px: "10px", backgroundColor: "#DBE9DD" }}>
            <CardContent>
              <Stack py={1}>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" color="black">
                      Prompt
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      variant="subtitle1"
                      fontStyle="italic"
                      align="justify"
                    >
                      {item.prompt}
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
                      {item.response}
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}

export default Responses;
