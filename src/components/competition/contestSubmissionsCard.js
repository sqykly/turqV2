import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import Truncate from "react-truncate"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {  EDITOR_PAGE_URL } from "../../constants"

import LegislationList from "../legislation/legislationList"
import {isPastEndDate } from "../../util/dateCompare"


const ContestSubmissionsCard = ({contest, legislationList}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom  variant="h5" component="h2">
        <Link
          to={EDITOR_PAGE_URL + "/legislation?contest=" + contest.id}
        >
          {!isPastEndDate(contest.endDate)
            ? <Button variant="contained" size="lg" > Create New Legislation </Button>
            : null
          }
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" component="div">
        <h2>Legislation Submitted For This Contest</h2>
        <hr />
        <LegislationList legislation={legislationList}/>
      </Typography>
    </CardContent>
  </Card>
)

export default ContestSubmissionsCard

ContestSubmissionsCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
  left: PropTypes.bool,
  buttonText: PropTypes.string
}

ContestSubmissionsCard.defaultProps = {
  title: "",
  id: null,
  description: "",
  link: "",
  left: true ,
  buttonText: "View Contest"
}