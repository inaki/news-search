import React from 'react';
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
        fontFamily: '"Lora", serif'
    }
});

class NewsList extends React.Component {
    handleImageError = e => {
        // handles image loading error from the apinews.org and default to news source brand image
        e.target.onerror = null; 
        if(this.props.newsData.source === 'wsj.com') {
            return e.target.src="https://s.wsj.net/blogs/img/WSJ_Logo_BlackBackground_1200x630social";
        } else if (this.props.newsData.source === 'nytimes.com') {
            return e.target.src="https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png";
        } else if (this.props.newsData.source === 'bbc.com') {
            return e.target.src="https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1";
        } else if (this.props.newsData.source === 'cnn.com') {
            return e.target.src="https://www.corporateleadersgroup.com/reports-evidence-and-insights/news-images/cnn-logo.tif/image_preview";
        } else {
            return e.target.src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix9Iix5_rgAhUQKqwKHTHdCNcQjRx6BAgBEAU&url=https%3A%2F%2Fdoubletap.online%2Ftag%2Fnews&psig=AOvVaw1Qw6IXFRTRelup7ne00atT&ust=1552418406475124";
        }
    }
    renderCards = (item) => {
        return (
            <Card key={uniqid()} className={this.props.classes.card} raised={true}>
                <div>
                    {
                        item.urlToImage !== null && 
                        <img
                            className={this.props.classes.media}
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
                        <Typography component="h6" aria-label="Article Content">
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
                <Masonry className={'my-gallery-class'}>   
                    {articlesList}
                </Masonry>
            </React.Fragment>
        )
    }
}

const StyledNewsList = withStyles(styles)(NewsList);

const mapStateToProps = state => {
    return {
        newsData: state.newsData,
        searched: state.searched,
        sorted: state.sortBy
    }
}

export default connect(mapStateToProps)(StyledNewsList);