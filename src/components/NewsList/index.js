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

const styles = {
  container: {
    width: '100wv'
  },
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
};

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
                            title="Contemplative Reptile"
                            />
                    }
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" className={this.props.classes.cardTitle}>
                        {item.title}
                    </Typography>
                    <Typography component="h6">
                        {item.content}
                    </Typography>
                    </CardContent>
                </div>
                <CardActions>
                    <Button size="small" href={item.url} target="_blank">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }

    render() {
        
        const { data, searched, sorted } = this.props;
        const articles = sorted.length ? sorted : data;
        const articlesList = articles
            .filter( item => item.title.toLowerCase().indexOf(searched) !== -1)
            .map(item => this.renderCards(item, searched));
        console.log(articlesList)
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
        searched: state.searched,
        sorted: state.sortBy
    }
}

export default connect(mapStateToProps)(StyledNewsList);