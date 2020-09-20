import React from "react"
import { Button } from "@material-ui/core"
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import Truncate from "react-truncate"

const ContestPanel = ({title, link, description, left, buttonText}) => (
<div className={`${left ? " left-contest-panel" : "right-contest-panel"} h-100 container-fluid col-md-6 col-12 d-flex h-100 pb-4 mx-auto`}>
  <div className="row justify-content-center align-self-center">
    <div className="col">
      <div className="row align-items-center">
        <div className="col">
          <h2 className="mt-2">{title}</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Truncate lines={5} ellipsis={<span>... </span>}>
            {description}
          </Truncate>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <Link to={link}>
            <Button variant="contained" color="primary">{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default ContestPanel

ContestPanel.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
  left: PropTypes.bool,
  buttonText: PropTypes.string
}

ContestPanel.defaultProps = {
  title: "",
  id: null,
  description: "",
  link: "",
  left: true ,
  buttonText: "View Contest"
}