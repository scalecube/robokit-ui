import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import {ButtonWithPopup} from "../../components/ButtonWithPopup";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";

const Avatar = () => (
  <img width={24} height={24} src="/avatar.jpeg" alt="avatar"/>
);

const useStyles = makeStyles(() => ({
  iconButton: {
    padding: '12px 0 12px 12px'
  },
}));

export const SettingsBlock = () => {
  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.iconButton} color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton className={classes.iconButton} color="inherit">
        <ButtonWithPopup
          ButtonContent={AddIcon}
          popperPlacement="bottom-end"
          popperOffset="4 20"
        >
          {({ isOpen, close }) => (
            <MenuList onClick={close} autoFocusItem={isOpen}>
              <MenuItem>New repository</MenuItem>
              <MenuItem>Import repository</MenuItem>
            </MenuList>
          )}
        </ButtonWithPopup>
      </IconButton>
      <IconButton className={classes.iconButton} color="inherit">
        <ButtonWithPopup
          ButtonContent={Avatar}
          popperPlacement="bottom-end"
          popperOffset="4 20"
        >
          {({ isOpen, close }) => (
            <MenuList onClick={close} autoFocusItem={isOpen}>
              <MenuItem>New repository</MenuItem>
              <MenuItem>Import repository</MenuItem>
            </MenuList>
          )}
        </ButtonWithPopup>
      </IconButton>
    </div>
  );
};
