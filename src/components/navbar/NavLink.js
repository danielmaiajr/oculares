import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const NavLink = ({ setShow }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.linkWrapper}>
        <a
          href="#quem-somos"
          className={classes.navLink}
          onClick={() => setShow(false)}
        >
          Quem Somos
        </a>
      </div>

      <div className={classes.linkWrapper}>
        <a
          href="#nossa-equipe"
          className={classes.navLink}
          onClick={() => setShow(false)}
        >
          Equipe
        </a>
      </div>

      <div className={classes.linkWrapper}>
        <a
          href="#contato"
          className={classes.navLink}
          onClick={() => setShow(false)}
        >
          Contato
        </a>
      </div>
    </div>
  );
};

export default NavLink;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  navLink: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    fontSize: 18,
    padding: "8px 15px",

    "&:hover": {
      "&:after": {
        backgroundColor: "#8dc6d9",
      },
      color: "#8dc6d9",
    },
    "&:after": {
      content: '""',
      width: "80%",
      position: "absolute",
      bottom: 0,
      padding: 1,
    },
  },

  [theme.breakpoints.down("sm")]: {
    wrapper: {
      display: "block",
      flexDirection: "column",
    },
    navLink: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "12px 0 12px 0px",
      "&:after": {
        display: "none",
      },
    },
  },
}));
