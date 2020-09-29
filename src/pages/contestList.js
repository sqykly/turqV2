import React from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout/layout"
import ContestPanelList from "../components/competition/contestPanelList"
import { fetchAllContests } from '../actions/contestActions'
import {isPastEndDate } from "../util/dateCompare"

class ContestPage extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchAllContests())
  }

  render() {
    var currentContests = []
    var pastContests = []
    if (this.props.allContests) {
      currentContests = this.props.allContests 
        .filter(contest => !isPastEndDate(contest.endDate))
      pastContests = this.props.allContests
        .filter(contest => isPastEndDate(contest.endDate))
    }

    return (
      <Layout>
        {this.props.allContests
          ? <>
            <div>
              <ContestPanelList title="Active Contests" contests={currentContests} />
            </div>
            <div className="mt-5">
              <ContestPanelList title="Past Contests" contests={pastContests} />
            </div>
          </>
          : <></>
        }
      </Layout>
    )
  }
}

function mapStateToProps(state) {

  const { contest } = state
  const { allContests, isFetching } = contest

  return {
    allContests,
    isFetching
  }

}


export default connect(mapStateToProps)(ContestPage)