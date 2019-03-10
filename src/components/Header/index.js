import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBeatByInput } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import {
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    TextField
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
  underline: {
    '&:hover': {
      '&:before': {
        borderBottom: ['rgba(0, 188, 212, 0.7)', '!important'],
      }
    },
    '&:before': {
      borderBottom: 'rgba(0, 188, 212, 0.7)',
    }
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
    this.props.searchBeatByInput(target.value);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <TextField
              id="standard-search"
              label="Search for News"
              type="search"
              onChange={this.handleSearch}
              value={this.state.inputValue}
              className={classes.textField}
              InputLabelProps={{
                  style: {
                      color: 'white'
                  }
              }}
              inputProps={{
                  style: classes.inputPropsSty
              }}
              margin="normal"
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
  searchBeatByInput
})(StyledHeader);
