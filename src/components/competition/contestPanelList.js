import React from "react"
import PropTypes from "prop-types"
import ContestPanel from "./contestPanel"
import { CONTEST_PAGE_URL } from "../../constants"

const CompetitionList = ({title, contests}) => {
  const contestCards = contests
    .map((contest, idx) => <ContestPanel
                   title={contest.title}
                   description={contest.description}
                   link={CONTEST_PAGE_URL + "/" + contest.id}
                   key={contest.id}
                   //This acts as a way to flip the color left-right color scheme every row
                   left={idx % 4 == 0 || idx % 4 == 3}
                 />)
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h1>{title}</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        {contestCards}
      </div>
    </>
  )
}

export default CompetitionList

CompetitionList.propTypes = {
  title: PropTypes.string,
  contests: PropTypes.array
}

CompetitionList.defaultProps = {
  title: "",
  contests: []
}