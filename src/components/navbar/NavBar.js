import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Container, AppBar, Toolbar, IconButton } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import NavLink from "./NavLink";

const NavBar = ({ search, ...props }) => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <HideOnScroll show={show} {...props}>
        <AppBar color="inherit" className={show ? classes.root : ""}>
          <Toolbar>
            {/* Show NAVBAR on desktop */}
            <Container className={classes.container}>
              <img
                width={90}
                src="https://scontent.fmea1-1.fna.fbcdn.net/v/t1.18169-9/15107223_1791428401131007_1018224868496297600_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=973b4a&_nc_ohc=numXYmjabeIAX8m6SzY&_nc_ht=scontent.fmea1-1.fna&oh=00_AT_cDVQ2KnmOoIrvFBHOE_cHM84pjcPyLPF8GTF9erdZig&oe=61E912F0"
              />
              {search && search}
              <div>
                <NavLink setShow={setShow} />
              </div>
            </Container>

            {/* Show NAVBAR on mobile */}
            <Container className={classes.mobileContainer}>
              <Link href="/">
                <a className={classes.logo} onClick={() => setShow(false)}>
                  TEST
                </a>
              </Link>
              {show ? (
                <IconButton color="inherit" onClick={() => setShow(!show)}>
                  <CloseIcon fontSize="large" />
                </IconButton>
              ) : (
                <IconButton color="inherit" onClick={() => setShow(!show)}>
                  <MenuIcon fontSize="large" />
                </IconButton>
              )}
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Display block under NAVBAR */}
      <Toolbar />

      {/* Show mobile MENU */}
      {show && (
        <Container className={classes.mobileMenu}>
          <NavLink setShow={setShow} />
        </Container>
      )}
    </React.Fragment>
  );
};

export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "inherit",
  },
  mobileContainer: {
    display: "none",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    zIndex: 1000,
    top: 0,
    left: 0,
    padding: "110px 32px 0 32px",
    height: "calc(100vh)",
  },
  logo: {
    fontSize: 20,
  },

  [theme.breakpoints.down("sm")]: {
    container: {
      display: "none",
    },
    mobileContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
}));

function HideOnScroll(props) {
  const { children, window, show } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <React.Fragment>
      {show ? (
        <React.Fragment>{children}</React.Fragment>
      ) : (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      )}
    </React.Fragment>
  );
}
