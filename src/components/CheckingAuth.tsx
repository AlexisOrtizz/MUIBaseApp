import { CircularProgress, Grid } from "@mui/material"

const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh', 
        bgcolor: 'background.paper',
        padding: 0, margin: 0,
      }}
    >
      <Grid 
        container
        alignContent="center"
        justifyContent="center"
      >
        <CircularProgress color="primary" />
      </Grid>
    </Grid>
  );
}

export default CheckingAuth;