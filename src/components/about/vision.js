import React from "react"
import Grid from '@material-ui/core/Grid';

const Vision = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <p className="about-text-centered">
          Turq's mission is to make direct democracy viable by enabling citizens to draft and submit their own legislation. Our focus is on alleviating the pressure on legislators by enabling citizens to write bills for one another.
        </p>
      </Grid>
    </Grid>
  )
}

export default Vision
