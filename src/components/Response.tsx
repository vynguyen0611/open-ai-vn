import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';

const Response: React.FC<{
  prompt: string;
  response: string;
}> = (props) => {
  return (
    <Stack spacing={2} sx={{ py: 1 }}>
      <Card sx={{ px: { xs: "2px", md: "8px" }, backgroundColor: "#DBE9DD" }}>
        <CardContent>
          <Stack py={0.5}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" color="black">
                  Prompt
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  fontStyle="italic"
                  align="justify"
                  pl="20px"
                >
                  {props.prompt}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          <Stack py={0.5}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body2" fontStyle="bold" color="black">
                  Response
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  color="#274FD2"
                  align="justify"
                  variant="body2"
                  pl="20px"
                >
                  {props.response}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Response;
