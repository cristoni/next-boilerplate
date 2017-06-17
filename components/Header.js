import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Router from 'next/router';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleTap = (route) => () => {
    Router.push(route);
    this.handleClose();
  }

  render() {
    return (
      <div>
        <AppBar
          title="Next Boilerplate"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleTap('/')}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleTap('/about')}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header
