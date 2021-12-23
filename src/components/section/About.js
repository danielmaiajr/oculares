import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.wrapper}>
        <div className={classes.title}>Quem Somos</div>
        <div className={classes.description}>
          A Oculares Óptica chega em Macaé com um novo conceito de atendimento e
          prestação de serviços no ramo Óptico. Sob a responsabilidade técnica
          de Valber Pontes, CROO-RJ 19.06.0599-4, com mais de 20 anos de
          experiência no mercado . A Oculares Óptica tem no atendimento e na sua
          estrutura moderna, seus principais diferenciais.
        </div>
        <div className={classes.description}>
          Além disso, conta com uma equipe de colaboradores e funcionários
          altamente qualificados e sempre atualizados com as principais
          novidades e tendências do mercado. Escolher a Oculares Óptica é fazer
          a escolha certa, porque seus olhos merecem!
        </div>
      </Container>
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#inherit",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 0",
    backgroundColor: "inherit",
    scrollPaddingTop: 10,
  },
  title: {
    fontSize: 24,
  },
  description: {
    width: "90%",
    paddingTop: 30,
    fontSize: 16,
    lineHeight: 2,
  },
  [theme.breakpoints.down("sm")]: {
    description: {
      width: "90%",
    },
  },
}));
