import { Box, Button, Divider, MenuItem, Popover, Select, Typography } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import NavMenuPopover from "./NavMenuPopover";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  ListItem, ListItemButton,
  ListItemIcon, ListItemText
} from '@mui/material';
import useAuthState from "../hooks/useAuthState";
import { authState } from "../constants";
import useAppState from "../hooks/useAppState";

export default function Header() {
  const { ActiveCurrency, setActiveCurrency } = useAppState();
  const { setAuthStatus } = useAuthState();
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const openU = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const logout = () => {
    localStorage.removeItem('AuthState');
    setAuthStatus(authState.anonymous);
    navigate('/login');
  }

  return (
    <Box
      id="mainContentHeader"
      sx={{
        display: 'flex',
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingInline: 2,
      }}>
      <Box sx={{ display: 'flex', flex: 1, alignItems: "center" }} className="sales-header-left">
        <div id="mobileNavigation">
          <NavMenuPopover title={'Menu'} />
        </div>
      </Box>

      <Box className="flex-center-y mobile-only">
        <Link to="/"><img src={"/vite.svg"} alt="logo" /></Link>
      </Box>

      <Box sx={{ display: 'flex', flex: 1, alignItems: "center", justifyContent: 'flex-end' }} className="sales-header-right">
        <div className="account-container">
          <Button
            id="user-account-button"
            aria-controls={openU ? 'user-account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openU ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<AccountCircleIcon style={{ color: '#1a252a', fontSize: 34 }} />}>
            <div className="flex-center-y">
              <div
                style={{ margin: 0, color: "#1a252a", fontWeight: 400, fontSize: 16, textTransform: 'initial' }}
                className="account-username">Welcome, <b>John Doe</b>
              </div>
            </div>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}>
            <ul id="drawerList" style={{ margin: 0, padding: 5, backgroundColor: "white" }}>
              <Typography className="text-center" variant="subtitle1"><b>Active currency</b></Typography>

              <ListItem disablePadding onClick={handleClose}>
                <Select
                  sx={{ backgroundColor: "white", width: '100%' }}
                  id='activeCurrency'
                  size="small"
                  value={ActiveCurrency}
                  onChange={(e) => setActiveCurrency(e.target.value)}
                >
                  <MenuItem value={'usd'}>$ USD</MenuItem>
                  <MenuItem value={'eur'}>€ EUR</MenuItem>
                </Select>
              </ListItem>

              <ListItem disablePadding onClick={handleClose}>
                <ListItemButton onClick={logout}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Logout'} />
                </ListItemButton>
              </ListItem>
            </ul>
          </Popover>
        </div>
      </Box>
    </Box>
  )
}