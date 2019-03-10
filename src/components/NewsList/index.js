import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    maxWidth: 345,
    margin: 20
  },
  media: {
    height: 140,
  },
};

class NewsList extends React.Component {

    renderCards = (item) => {
        return (
            <Card key={uniqid()} className={this.props.classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={this.props.classes.media}
                    image={item.urlToImage}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography component="p">
                        {item.content}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }

    render() {
        const { data, classes } = this.props;
        return (
            <div className={classes.container}>
                {data.map(item => this.renderCards(item))}
            </div>
        )
    }
}

export default withStyles(styles)(NewsList);