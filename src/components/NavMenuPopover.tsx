import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import {
  List, ListItem, ListItemButton,
  ListItemIcon, ListItemText
} from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';

const PopoverStyle = styled('div')(({ theme }) => ({

}));

export default function NavMenuPopover({ title }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <PopoverStyle id={'menuPopover'}>
      <Button
        sx={{
          paddingInline: 0,
          width: 50,
          minWidth: 50,
        }}
        color='inherit'
        variant='outlined'
        aria-describedby={id}
        onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List id="drawerList" sx={{ backgroundColor: "#fff" }}>
          <Link to="/">
            <ListItem disablePadding onClick={handleClose}>
              <ListItemButton>
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary={'Analytics'} className="dark" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link to="users">
            <ListItem disablePadding onClick={handleClose}>
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary={'Users'} className="dark" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Popover>
    </PopoverStyle>
  );
}