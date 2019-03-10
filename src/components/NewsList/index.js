import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import uniqid from 'uniqid';

const styles = {
  container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100vw',
      justifyContent: 'space-around'
  },
  card: {
    maxWidth: '23%',
    margin: '5px 10px',
    height: '100%'
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
                <CardActionArea>
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
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary" href={item.url}>
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }

    render() {
        const { data, searched, classes } = this.props;
        console.log(data)
        return (
            <div className={classes.container}>
                {data
                    .filter( item => {
                        return (item.title.toLowerCase().indexOf(searched) !== -1);
                    }).map(item => this.renderCards(item, searched))}
            </div>
        )
    }
}

const StyledNewsList = withStyles(styles)(NewsList);

const mapStateToProps = state => {
    return {
        searched: state.searched
    }
}

export default connect(mapStateToProps)(StyledNewsList);