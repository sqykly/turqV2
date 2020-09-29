import React from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';

import ContestPanelList from "../components/competition/contestPanelList"
import { CONTEST_DATA_URL } from "../constants"
import Layout from "../components/layout/layout"
import Hero from "../components/hero"

class Home extends React.Component {

  componentDidMount() {
    axios.get(CONTEST_DATA_URL)
      .then(res => {
        const contests = res.data;
        this.setState({contests});
      }
    ).catch(function (error) {
      toast.error("Unable to load contest, plese try again in a few minutes");
    })
  }
  
  render() {
    var currentContests = null 
    if (this.state && this.state.contests) {
      currentContests = this.state.contests 
        //.filter(contest => !isPastEndDate(contest.endDate))
    }
    return (
      <Layout fullWidth>
        <Grid container>
          <Grid item>
            <Hero
              link="/about"
              header="Legislation for the people, by the people"
              buttonText="Learn More About Turq »"
              subtext="If you want better public policy, you need a legislative bill written. If you want a bill written, you have limited options. Either write it yourself, or get a politician to write it for you. But thousands of other constituents are also asking politicians to write them legislation everyday, and writing it yourself can be intimidating. Turq is the solution."
            />
          </Grid>
          <Grid item>
            {currentContests && currentContests.length > 0
            ? <ContestPanelList title="Active Contests" contests={currentContests} />
            : <></>
            }
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default Home
