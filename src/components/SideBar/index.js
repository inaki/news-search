// SideBar Component
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { collapseDrawer, fetchArticlesByJournal } from '../../actions';
import { newsSources } from '../../variables';

const styles = {
    list: {
        width: 250,
    }
};

class SideBar extends React.Component {
    state = {
        open: false,
        activeLink: 'wsj.com'
    };

    toggleDrawer = (open) => () => {
        this.setState({
        open: open,
        activeLink: 'wsj.com'
        });
    };

    render() {
        const { classes, fetchArticlesByJournal } = this.props;

        const sideList = (
        <div className={classes.list}>
            <List>
            {newsSources.map( ({name, url}) => (
                <ListItem button key={name} selected={url === this.state.activeLink}>
                <ListItemText primary={name} onClick={() => {
                    this.setState({activeLink: url});
                    fetchArticlesByJournal(url);
                }}/>
                </ListItem>
            ))}
            </List>
        </div>
        );

    return (
  
        <Drawer open={this.props.drawerOpen} onClose={this.props.collapseDrawer}>
            <div
                tabIndex={0}
                role="button"
                onClick={this.props.collapseDrawer}
                onKeyDown={this.props.collapseDrawer}
            >
                {sideList}
            </div>
        </Drawer>

    );
  }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const StyledSideBar = withStyles(styles)(SideBar);

const mapStateToProps = state => {
    return {
        drawerOpen: state.drawerOpen,
        articles: state.articles
    }
}

export default connect(mapStateToProps, {
    collapseDrawer,
    fetchArticlesByJournal
})(StyledSideBar);