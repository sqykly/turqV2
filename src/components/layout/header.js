import React from "react"
import { Link } from "react-router-dom";
import propTypes from "prop-types"
import Logo from "../logo"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { styled } from '@material-ui/core/styles';


const AppHeader = styled(AppBar)({
  backgroundColor: '#f8f9fa',
  color: '#444444',
});

const Header = ({isAuthenticated, logout}) => {

  return (
    <div>
      <AppHeader position="fixed">
        <Toolbar>
            <Link to="/">
              <Logo />
            </Link>
          <Typography>
            <Link to="/drafter">
              <Button>Drafting Guidelines</Button>
            </Link>
            <Link to="/contest">
              <Button>Explore Contests</Button>
            </Link>
            {isAuthenticated
              ?<Link to="/login">
                <Button onClick={() => logout()}>Logout</Button>
              </Link>
              :<Link to="/login">
                <Button>Login</Button>
              </Link>
            }
            <Link to="/about">
              <Button>About</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppHeader>
      {/* Without this extra toolbar the content will render underneath the real toolbar
          Reference: https://material-ui.com/components/app-bar/#fixed-placement */}
      <Toolbar />
    </div>
  )
}

export default Header

Header.propTypes = {
  isAuthenticated: propTypes.bool,
}

Header.defaultProps = {
  isAuthenticated: false
}
