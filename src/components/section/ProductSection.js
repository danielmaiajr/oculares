import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

import ImageSection from "./ImageSection";

const ProductSection = () => {
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
              Nossa Equipe
            </Typography>
            <Typography align="center">
              Figma’s free graphic design tool makes it easy to incorporate
              design into the process of building digital products.
            </Typography>
          </div>
        </div>
        <Grid container spacing={4}>
          <Grid item md={4} sm={4} xs={12}>
            <ImageSection />
            <div className={styles.description}>
              <Typography
                variant="h5"
                align="center"
                style={{ paddingBottom: 10 }}
              >
                A better pen tool
              </Typography>
              <Typography>
                Draw custom shapes using the pen tool and leverage a detailed
                grid system.
              </Typography>
            </div>
          </Grid>

          <Grid item md={4} sm={4} xs={12}>
            <ImageSection />
            <div className={styles.description}>
              <Typography
                variant="h5"
                align="center"
                style={{ paddingBottom: 10 }}
              >
                A better pen tool
              </Typography>
              <Typography>
                Draw custom shapes using the pen tool and leverage a detailed
                grid system.
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <ImageSection />
            <div className={styles.description}>
              <Typography
                variant="h5"
                align="center"
                style={{ paddingBottom: 10 }}
              >
                A better pen tool
              </Typography>
              <Typography>
                Draw custom shapes using the pen tool and leverage a detailed
                grid system.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductSection;

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
    paddingTop: 30,
  },
}));
