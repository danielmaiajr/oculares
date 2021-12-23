import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

import ImageSection from "./ImageSection";

const ClientSection = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.title}>
          <div className={styles.titleCenter}>
            <Typography
              variant="h2"
              align="center"
              style={{ paddingBottom: 20 }}
            >
              O que nossos clients tem a dizer
            </Typography>
          </div>
        </div>
        <Grid container spacing={4}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "80%" }}>
              <div className={styles.description}>
                <FormatQuoteIcon fontSize="large" />
                <Typography
                  align="center"
                  style={{ lineHeight: 2, width: "90%" }}
                >
                  Atendimento maravilhoso, tudo perfeito e transparente, super
                  indico, estão de parabéns. Nota 1000!
                </Typography>
              </div>
              <Typography
                variant="h5"
                align="right"
                style={{ padding: "10px 0" }}
              >
                - Daniel Maia
              </Typography>
            </div>
          </Grid>

          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "80%" }}>
              <div className={styles.description}>
                <FormatQuoteIcon fontSize="large" />
                <Typography
                  align="center"
                  style={{ lineHeight: 2, width: "90%" }}
                >
                  Conheci à apenas um mês, contudo minhas impressões são as
                  melhores possíveis, serviço prestado, comprometimento,
                  seriedade o tratamento ao cliente... Sem dúvida, recomendo!!
                </Typography>
              </div>
              <Typography
                variant="h5"
                align="right"
                style={{ padding: "10px 0" }}
              >
                - Daniel Maia
              </Typography>
            </div>
          </Grid>

          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "80%" }}>
              <div className={styles.description}>
                <FormatQuoteIcon fontSize="large" />
                <Typography
                  align="center"
                  style={{ lineHeight: 2, width: "90%" }}
                >
                  Super recomendo, atendimento, seriedade, comprometimento,
                  super dedicado ao trabalho e aos clientes.
                </Typography>
              </div>
              <Typography
                variant="h5"
                align="right"
                style={{ padding: "10px 0" }}
              >
                - Daniel Maia
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "80%" }}>
              <div className={styles.description}>
                <FormatQuoteIcon fontSize="large" />
                <Typography
                  align="center"
                  style={{ lineHeight: 2, width: "90%" }}
                >
                  Atendimento maravilhoso, tudo perfeito e transparente, super
                  indico, estão de parabéns. Nota 1000!
                </Typography>
              </div>
              <Typography
                variant="h5"
                align="right"
                style={{ padding: "10px 0" }}
              >
                - Daniel Maia
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ClientSection;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
    padding: "100px 0",
  },
  container: {
    backgroundColor: "#f5f5f5",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  titleCenter: {
    maxWidth: 700,
    paddingBottom: 30,
  },
  description: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 30,
    lineHeight: 2,
  },
}));
