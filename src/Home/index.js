import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ImgMediaCard from '../common/card';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  gridProperties: {
    justifyContent: 'center',
    marginTop: '5vh',
    paddingLeft: '6vh',
    paddingRight: '5vh'
  }
});

const mapStateToProps = (state) => {
  return { Products: state.Products };
};

const imagePath = process.env.PUBLIC_URL + '/assets/';

class Home extends PureComponent {
  state = {
    dummyGrids: 4,
    dummyCardData: [
      {
        img: 'https://dummyimage.com/200x200/000/fff.png&text=Featured',
        content: 'Featured Content'
      },
      {
        img: 'https://dummyimage.com/200x200/000/fff.png&text=Featured',
        content: 'Featured Content'
      },
      {
        img: 'https://dummyimage.com/200x200/000/fff.png&text=Featured',
        content: 'Featured Content'
      },
      {
        img: 'https://dummyimage.com/200x200/000/fff.png&text=Featured',
        content: 'Featured Content'
      }
    ]
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.setState((prevState) => {
    // });
  }

  handleCard = (e) => {
    console.log(e);
  };

  handleAddOrDeleteClick = (data) => {
    console.log('btn click', data);
  };

  render() {
    const { classes, Products } = this.props;
    const { dummyCardData } = this.state;
    let numRows = [];
    // for (let ii = 0; ii < this.state.dummyGrids; ii++) {
    //   numRows.push(
    //     <Grid key={ii} item xs={3}>
    //       <ImgMediaCard
    //         click={this.handleCard}
    //         img={dummyCardData[ii].img}
    //         content={dummyCardData[ii].content}
    //         addDeleteClick = {this.handleAddOrDeleteClick}
    //       />
    //     </Grid>
    //   );
    // }

    Products.forEach((item) => {
      numRows.push(
        <Grid key={item.id} item xs={3}>
          <ImgMediaCard
            click={this.handleCard}
            img={item.img}
            content={dummyCardData[ii].content}
            addDeleteClick={this.handleAddOrDeleteClick}
          />
        </Grid>
      );
    });

    return (
      <div className={classes.root}>
        <Grid>
          <ImgMediaCard
            xs={12}
            click={this.handleCard}
            img={dummyCardData[0].img}
            content={dummyCardData[0].content}
            maxWidth={1000}
          />
        </Grid>
        <Grid className={classes.gridProperties} container spacing={8}>
          {/* <ImgMediaCard click={this.handleCard} /> */}
          {numRows}
        </Grid>
      </div>
    );
  }
}

// export default withStyles(styles)(Home);

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    null
  )
)(Cart);
