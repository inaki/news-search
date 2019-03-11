import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBeatByInput, openDrawer, sortSelect } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import {
    IconButton,
    AppBar,
    Toolbar,
    Typography,
    TextField,
    Select,
    MenuItem,
    Input
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
      inputValue: '',
      sortBy: 'none'
    }
  }

  handleSearch = ({target}) => {
    this.setState({inputValue: target.value});
    this.props.searchBeatByInput(target.value.toLowerCase());
  }

  handleSortBy = ({target}) => {
    this.setState({sortBy: target.value});
    this.props.sortSelect(target.value);
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
          
              <TextField 
                placeholder="Search for news"
                id="standard-search"
                type="search"
                onChange={this.handleSearch}
                value={this.state.inputValue}
     
              />
              <Select
                value={this.state.sortBy}
                onChange={this.handleSortBy}
              >
                <MenuItem value="">
                  <em>Sort Articles</em>
                </MenuItem>
                <MenuItem value='publishedAt'>Date</MenuItem>
                <MenuItem value='relevancy'>Relevance</MenuItem>
                <MenuItem value='popularity'>Popularity</MenuItem>
                <MenuItem value='none'>None</MenuItem>
              </Select>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledHeader = withStyles(styles)(Header);

export default connect(null, {
  searchBeatByInput,
  openDrawer,
  sortSelect
})(StyledHeader);
