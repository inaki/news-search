// Header Component
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
import {
    Search as SearchIcon,
    Menu as MenuIcon
} from '@material-ui/icons';


const styles = {
    root: {
        flexGrow: 1,
        marginBottom: 75
    },
    brandName: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    selectInput: {
        height: 31, 
        width: 130,
        fontFamily: 'Helvetica, Arial, Sans-Serif !important'
    },
    iconButton: {
        position: 'absolute',
        right: 0
    }
};

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            sortBy: 'sort'
        }
    }

    handleSearch = ({target}) => {
        this.setState({inputValue: target.value});
        this.props.searchBeatByInput(target.value.toLowerCase());
    }

    handleSortBy = ({target}) => {
        this.setState({sortBy: target.value});
        this.props.sortSelect(target.value, this.props.newsData.source);
    }

    render() {
        const { classes, openDrawer } = this.props;
        return (
        <div className="appbar">
            <AppBar position="fixed" className={classes.root}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="News Source Menu"
                        onClick={openDrawer}
                    >
                    <MenuIcon />
                    </IconButton>
                    
                    <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.brandName}
                        aria-label="Title">
                        The News
                    </Typography>
                
                    <TextField 
                        aria-label="Search Field"
                        placeholder="Search for news"
                        id="news-search"
                        type="search"
                        onChange={this.handleSearch}
                        value={this.state.inputValue}
                        className="search-input"
                        InputProps={{
                            style: {
                            marginRight: 30,
                            width: 200,
                            fontFamily: 'Helvetica, Arial, Sans-Serif'
                            },
                            endAdornment: (
                            <IconButton className={classes.iconButton} aria-label="Search Button">
                                <SearchIcon />
                            </IconButton>
                            )
                        }}
                    />
        
                    <Select
                        value={this.state.sortBy}
                        onChange={this.handleSortBy}
                        className={[classes.selectInput, 'select-input'].join(' ')}
                        aria-label="Sort Select"
                    >
                        <MenuItem value="sort"><em>Sort Articles</em></MenuItem>
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
    classes: PropTypes.object,
    openDrawer: PropTypes.func
};

const StyledHeader = withStyles(styles)(Header);

export const mapStateToProps = state => {
    return {
        newsData: state.newsData
    }
}

export default connect(mapStateToProps, {
    searchBeatByInput,
    openDrawer,
    sortSelect
})(StyledHeader);
