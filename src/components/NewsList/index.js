import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    },
    cardTitle: {
        fontFamily: '"Lora", serif'
    }
});

class NewsList extends React.Component {

    renderCards = (item) => {
        return (
            <Card key={uniqid()} className={this.props.classes.card} raised={true}>
                <div>
                    {
                        item.urlToImage !== null && 
                        <CardMedia
                            className={this.props.classes.media}
                            image={item.urlToImage}
                            aria-label="Article Photo"
                            title="Contemplative Reptile"
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
        console.log(newsData.articles[0])
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