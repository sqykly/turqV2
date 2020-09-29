import React from "react"
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { DEFAULT_CONTEST_RULES } from "../../constants"

function CompetitionText ({title, prizes, description, rules, criteria, endDate}) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom  variant="h3" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <header>
            <p>
              Competition Close: {new Date(endDate).toDateString()}
            </p>
          </header>
        </Typography>
        <Typography gutterBottom  variant="h4" component="h2">
          Prizes
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(prizes)}
        </Typography>
        <br/>
        <Typography gutterBottom  variant="h4" component="h2">
          Description
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <ReactMarkdown source={description} />
        </Typography>
        <Typography gutterBottom  variant="h4" component="h2">
          Rules
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <ReactMarkdown source={rules} />
          <ReactMarkdown source={DEFAULT_CONTEST_RULES} />
        </Typography>
        <Typography gutterBottom  variant="h4" component="h2">
          Judging Criteria
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          <ReactMarkdown source={criteria} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CompetitionText

CompetitionText.propTypes = {
  title: PropTypes.string,
  prizes: PropTypes.number,
  description: PropTypes.string,
  rules: PropTypes.string,
  criteria: PropTypes.string,
  endDate: PropTypes.string
}

CompetitionText.defaultProps = {
  title: "",
  prizes: 0,
  description: "",
  rules: "",
  criteria: "",
  endDate: "1970-1-1",
}