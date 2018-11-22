import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Login from '../Login';

 class NavBar extends Component {
  render() {
    return (
      <div>
          <AppBar>
              <Toolbar>
                  <p className={this.props.classes.grow}>Albums</p>
                  <Login />
              </Toolbar>
          </AppBar>
      </div>
    )
  }
}

export default withStyles({
    grow: {flexGrow:1},
    nav:{ color: 'white'}
})(NavBar);
