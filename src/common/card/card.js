import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ADD_BUTTON, DELETE_BUTTON } from './../constants/general';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};

const ImgMediaCard = ({ classes, click, img, content, maxWidth, addDeleteClick, id }) => {
  const handleAddOrDelete = (type) => (e) => {
    console.log(type);
    addDeleteClick({
      id: id,
      type: type
    });
  };

  console.log(maxWidth, 'max');
  if (maxWidth) {
    maxWidth = `${maxWidth}`;
  } else {
    maxWidth = '345';
  }
  return (
    <div onClick={click}>
      <Card className={maxWidth}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="restaurant images"
            className={classes.media}
            height="180"
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Featured
            </Typography>
            <Typography component="p">{content}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleAddOrDelete(ADD_BUTTON)}>
            ADD
          </Button>
          <Button size="small" color="primary" onClick={handleAddOrDelete(DELETE_BUTTON)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
