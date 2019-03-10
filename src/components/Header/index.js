import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBeatByInput, openDrawer } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import {
    IconButton,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 75
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  inputField: {
    background: 'black',
    color: 'white',
    border: 'none',
    borderBottom: '1px solid white',
    height: 30, 
    fontSize: '1rem',
    outline: 'none' 
  }
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
  }

  handleSearch = ({target}) => {
    this.setState({inputValue: target.value});
    this.props.searchBeatByInput(target.value.toLowerCase());
  }

  onKeyDownDelete = (event) => {
    if (event.keyCode === 8) {
      this.setState({inputValue: event.target.value});
      this.props.searchBeatByInput(event.target.value.toLowerCase());
    }
  }
  render() {
    const { classes, openDrawer } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <input
              placeholder="Search for news"
              id="standard-search"
              label="Search for News"
              type="search"
              onChange={this.handleSearch}
              onKeyDown={this.onKeyDownDelete}
              value={this.state.inputValue}
              className={classes.inputField}
              />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledHeader = withStyles(styles)(Header)

export default connect(null, {
  searchBeatByInput,
  openDrawer
})(StyledHeader);
