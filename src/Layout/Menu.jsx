import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
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
  );
}
