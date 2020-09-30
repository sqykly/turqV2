import React from "react"
import Grid from '@material-ui/core/Grid';

const Process = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <p className="about-text-centered">
          Turq hosts legislative writing contests which turn sponsor’s causes into legislation by connecting them with drafters. Once a drafter has written a bill for you, we then pipeline that piece of legislation into state and local legislatures to get voted on, directly.
        </p>
      </Grid>
    </Grid>
  )
}

export default Process
