import React, { PureComponent } from 'react';
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
    // maxHeight: '42em'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};

const ImgMediaCard = (props) => {
  const { classes, click, img, maxWidth, addDeleteClick, product, tempStock } = props;
  const {
    id,
    category,
    productDescription,
    productName,
    stock,
    originalPrice,
    discountedPrice
  } = product;
  let width;
  // function currying to pass two input data
  const handleAddOrDelete = (type) => (e) => {
    addDeleteClick({
      props: props,
      type: type
    });
  };

  if (maxWidth) {
    width = `${maxWidth}`;
  } else {
    width = '345';
  }
  return (
    <div onClick={click} className={classes.card}>
      <Card className={width}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={productName + 'picture'}
            className={classes.media}
            height="300"
            image={img}
            title={productName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {productName}
              <p>stock Left: {stock}</p>
              <p>Price: &#163;{discountedPrice} </p>
              <p>Category : {category}</p>
            </Typography>
            {discountedPrice !== originalPrice ? (
              <Typography gutterBottom variant="h5" component="h2" color="error">
                Original Price: &#163;{originalPrice}
              </Typography>
            ) : null}
            <Typography component="p">{productDescription}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            disabled={!Boolean(stock)}
            size="small"
            color="primary"
            onClick={handleAddOrDelete(ADD_BUTTON, props)}
          >
            ADD
          </Button>
          <Button
            disabled={!Boolean(tempStock)}
            size="small"
            color="primary"
            onClick={handleAddOrDelete(DELETE_BUTTON, props)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  click: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  maxWidth: PropTypes.number.isRequired,
  addDeleteClick: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  tempStock: PropTypes.number.isRequired
};

export default withStyles(styles)(ImgMediaCard);
