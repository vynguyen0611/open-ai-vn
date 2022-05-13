import { Container, Grid, Typography } from '@mui/material';

function Reponses() {
  return (
    <Container sx={{ py: "16px" }}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6">Responses</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Reponses;
