import React from "react";

import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Image from "next/image";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={6} md={4} className={classes.gridItem}>
              <div>
                <Typography variant="h5" style={{ paddingBottom: 15 }}>
                  LOGO
                </Typography>

                <div className={classes.iconContainer}>
                  <div className={classes.icon}>
                    <InstagramIcon fontSize="small" />
                  </div>
                  <Typography variant="h6" style={{ padding: "8px 0" }}>
                    Instagram
                  </Typography>
                </div>

                <div className={classes.iconContainer}>
                  <div className={classes.icon}>
                    <FacebookIcon fontSize="small" />
                  </div>
                  <Typography variant="h6" style={{ padding: "8px 0" }}>
                    Facebook
                  </Typography>
                </div>

                <div className={classes.iconContainer}>
                  <div className={classes.icon}>
                    <EmailIcon fontSize="small" />
                  </div>
                  <Typography variant="h6" style={{ padding: "8px 0" }}>
                    Email
                  </Typography>
                </div>
              </div>
            </Grid>

            <Grid item xs={6} sm={6} md={4} className={classes.gridItem}>
              <div>
                <Typography variant="h5" style={{ paddingBottom: 15 }}>
                  Oculares Óptica
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  <a href="#quem-somos">Quem Somos</a>
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  <a href="#nossa-equipe">Equipe</a>
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  <a href="#contato">Contato</a>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={6} sm={6} md={4} className={classes.gridItem}>
              <div style={{ width: "70%" }}>
                <Typography variant="h5" style={{ paddingBottom: 15 }}>
                  Entre em Contato
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  Telefone: (22) 2222-2222{" "}
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  Whatsapp: (22) 99999-9999{" "}
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  Horário de atendimento: segunda à sexta, das 9h às 17h (exceto
                  feriados).
                </Typography>
                <Typography variant="h5" style={{ padding: "18px 0" }}>
                  Endereço
                </Typography>
                <Typography variant="h6" style={{ padding: "8px 0" }}>
                  Rua Teixeira de Gouveia - Centro - Macaé/ RJ
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className={classes.copyright}>
          © Copyrigth 2022 - Rua Teixeira de Gouveia - Centro - Macaé/ RJ. Tel.:
          (22)2222-2222
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

const useStyles = makeStyles({
  root: { backgroundColor: "black", color: "#FFF" },
  container: {
    backgroundColor: "inherit",
    padding: "70px 0 50px 0",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: 10,
  },
  copyright: {
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 5px 0",
    fontSize: 10,
    backgroundColor: "black",
    color: "white",
  },
});
