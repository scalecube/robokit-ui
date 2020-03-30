import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menuTitle: {
    padding: '11px 20px',
    textAlign: 'right',
    margin: 0,
    fontSize: '30px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    display: 'flex'
  },
  menuLogo: {
    marginRight: '10px'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

export default function Menu({ isOpened, close }) {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        paper: clsx(classes.drawerPaper, !isOpened && classes.drawerPaperClose),
      }}
      open={isOpened}
    >
      <div className={classes.menuTitle}>
        <img className={classes.menuLogo} src="/logo.png" alt="Robokit" width={40} />
        <span>Robokit</span>
      </div>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={close}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          Security
        </ListSubheader>
        <ListItem button>
          <ListItemText primary="Secrets" />
        </ListItem>
        <ListSubheader component="div" id="nested-list-subheader">
          Clusters
        </ListSubheader>
        <ListItem button>
          <ListItemText primary="scalecube" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="seed" />
        </ListItem>
      </List>
    </Drawer>
  );
}
