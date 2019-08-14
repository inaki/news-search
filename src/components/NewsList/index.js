// NewsList Component
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import uniqid from 'uniqid';
import Masonry from 'react-masonry-component';
import EmptyState from '../EmptyState';
import { generateDefaultImage } from '../../utils';

const styles = theme => ({
    card: {
        margin: '5px 10px',
        maxWidth: 300
    },
    media: {
        height: 140,
        width: '100%'
    },
    cardTitle: {
        fontSize: '1.1rem',
        fontWeight: 'bold'
    }
});

class NewsList extends React.Component {
    handleImageError = e => {
        // handles image loading error from the apinews.org and default to news source brand image
        e.target.onerror = null; 
        e.target.src = generateDefaultImage(this.props.newsData.source);
    }
    renderCards = (item) => {
        return (
            <Card key={uniqid()} className={this.props.classes.card} raised={true}>
                <div>
                    {
                        item.urlToImage !== null && 
                        <img
                            className={[this.props.classes.media, 'card-img'].join(' ')}
                            src={item.urlToImage}
                            aria-label="Article Photo"
                            alt={item.urlToImage}
                            onError={ e => this.handleImageError(e) }
                        />
                    }
                    <CardContent>
                        <Typography
                            gutterBottom variant="h6"
                            component="h2"
                            aria-label="Article Title"
                            className={this.props.classes.cardTitle}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            component="h6"
                            aria-label="Article Content"
                        >
                            {item.content}
                        </Typography>
                    </CardContent>
                </div>
                <CardActions>
                    <Button
                        size="small"
                        href={item.url}
                        target="_blank"
                        aria-label="Link to Original Article">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }

    render() {
        
        const { newsData, searched } = this.props;
        const articlesList = newsData.articles
            .filter( item => item.title.toLowerCase().indexOf(searched) !== -1)
            .map(item => {
                return this.renderCards(item, searched);
            });
        
        return (
        
            <React.Fragment>
                { searched.length && !articlesList.length ? <EmptyState /> : null}
                {/* this Masonry is been mount either way */}
                <Masonry>   
                    {articlesList}
                </Masonry>
            </React.Fragment>
        )
    }
}

NewsList.propTypes = {
    classes: PropTypes.object.isRequired,
    newsData: PropTypes.object,
    searched: PropTypes.string
};

const StyledNewsList = withStyles(styles)(NewsList);

const mapStateToProps = state => {
    return {
        newsData: state.newsData,
        searched: state.searched
    }
}

export default connect(mapStateToProps)(StyledNewsList);