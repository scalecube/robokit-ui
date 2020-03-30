import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {Clusters} from "./Clusters";
import {SettingsBlock} from "./SettingsBlock";
import Menu from "./Menu";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  centerBlock: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const openMenu = () => {
    setIsMenuOpened(true);
  };
  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, isMenuOpened && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={openMenu}
            className={clsx(classes.menuButton, isMenuOpened && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.centerBlock}>
            <Clusters />
          </div>
          <SettingsBlock />
        </Toolbar>
      </AppBar>
      <Menu
        isOpened={isMenuOpened}
        close={closeMenu}
      />
    </>
  )
};
