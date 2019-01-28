import grey from '@material-ui/core/colors/grey';
import lime from '@material-ui/core/colors/lime';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: grey['300']
  },
  modalContainer: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      top: '18%',
      left: '4%',
      width: '92%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      top: '16%',
      left: '3%',
      width: '96%'
    },
    [theme.breakpoints.only('md')]: {
      top: '16%',
      left: '16%',
      width: '72%'
    },
    [theme.breakpoints.only('lg')]: {
      top: '25%',
      left: '25%',
      width: '50%'
    },
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    overflow: 'scroll',
    maxHeight: '70vh'
  },
  button: {
    backgroundColor: lime.A100
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  avatar: {
    width: '4em',
    height: '4em'
  },
  listItem: {
    fontSize: '2rem'
  },
  list: {
    backgroundColor: grey['300'],
    boxShadow: [`0 1px ${grey['50']}`],
    textAlign: 'center',
    marginTop: '2px'
  },
  gridButton: {
    display: 'flex',
    alignItems: 'center'
  },
  gridProperties: {
    textAlign: 'center'
  }
});

export default styles;
