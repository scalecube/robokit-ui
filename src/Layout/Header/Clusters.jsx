import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import {ButtonWithPopup} from "../../components/ButtonWithPopup";

export const Clusters = () => {
  return (
    <ButtonWithPopup
      ButtonContent={() => (
        <Typography component="span" color="inherit">
          Scalecube
        </Typography>
      )}
      popperPlacement="bottom-start"
      popperOffset="70 20"
    >
      {({ isOpen, close }) => (
        <MenuList onClick={close} autoFocusItem={isOpen}>
          <MenuItem>CapsulaJS</MenuItem>
          <MenuItem>OM2</MenuItem>
        </MenuList>
      )}
    </ButtonWithPopup>
  );
};
