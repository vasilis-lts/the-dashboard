import React from 'react';
import {
  Divider, List, ListItem,
  ListItemButton, ListItemIcon,
  ListItemText, Typography
} from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Link } from "react-router-dom";

const drawerWidth = 258;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
      '& #drawerList span': {
        display: "initial"
      }
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
      '& #drawerList span': {
        display: "none"
      }
    }),
    '& svg': {
      fill: 'white'
    },
    '& #drawerList': {
      flex: 1,
      background: "#1a252a"
    },
    '& #drawerList li': {
      color: "white"
    },
    '& #drawerList span': {
      fontSize: 16,
      letterSpacing: 0.25
    },
    '& .MuiListItem-root': {
      paddingLeft: 5,
      marginTop: 2
    },
    '& .bold .MuiTypography-root': {
      fontWeight: 700
    },
    '& .MuiAccordion-root:before': {
      display: "none"
    },
    '& .sublink .MuiListItem-root .MuiTypography-root span': {
      fontWeight: 400
    },

    '& .MuiListItemIcon-root': {
      minWidth: "35px"
    },
    '& #panel1bh-header': {
      width: 230,
      marginInline: 'auto'
    },
    '& #logout>.MuiListItem-root': {
      width: 230,
      marginInline: 'auto'
    },
    '& .sublink .MuiListItem-root': {
      marginLeft: 40
    },
  }),
);

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 65,
  '& #drawerList': {
    display: "none",
    flex: 1
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 0,
  marginTop: 0,
  padding: 0,
  position: 'relative',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Drawer variant="permanent" open={open} id="sidebar">

      <DrawerHeader id="drawerHeader">
        <div className="flex">
          <Link to="/"><img src={"/vite.svg"} alt="logo" /></Link>
          <Typography variant="h5" sx={{ ml: 1 }} color={'white'}>The Dashboard</Typography>
        </div>
      </DrawerHeader>

      <Divider color="white" />

      <List id="drawerList">

        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText primary={'Analytics'} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="users">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={'Users Management'} />
            </ListItemButton>
          </ListItem>
        </Link>

      </List>

    </Drawer>
  );
};

export default Sidebar;