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
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 75
  },
  brandName: {
    flexGrow: 1,
    fontFamily: '"Lora", serif'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  selectInput: {
    height: 30, 
    width: 130
  },
  iconButton: {
    position: 'absolute',
    right: 0
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
            <Typography variant="h6" color="inherit" className={classes.brandName}>
              The News
            </Typography>
          
              <TextField 
                placeholder="Search for news"
                id="standard-search"
                type="search"
                onChange={this.handleSearch}
                value={this.state.inputValue}
                InputProps={{
                  style: {
                    marginRight: 30,
                    width: 200
                  },
                  endAdornment: <IconButton className={classes.iconButton} aria-label="Search">
                   <SearchIcon />
                  </IconButton>
                }}
              />
  
              <Select
                value={this.state.sortBy}
                onChange={this.handleSortBy}
                className={classes.selectInput}
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
