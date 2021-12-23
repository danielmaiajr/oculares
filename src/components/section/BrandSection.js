import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const Section = ({ firstComponent, secondComponent }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <Grid container spacing={4}>
          <Grid item md={2} sm={4} xs={6} className={styles.header}>
            <img
              src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg"
              className={styles.image}
            />
          </Grid>
          <Grid item md={2} sm={4} xs={6} className={styles.header}>
            <img
              src="https://cdn.sanity.io/images/599r6htc/production/2218e3ca127e39e26892918e8749408e67b9cbde-77x77.svg?q=75&amp;fit=max&amp;auto=format"
              className={styles.image}
            />
          </Grid>
          <Grid item md={2} sm={4} xs={6} className={styles.header}>
            <img
              src="https://cdn.sanity.io/images/599r6htc/production/6ca2791b551f3302be33cf41c2ce58dd3924dc3d-77x77.svg?q=75&amp;fit=max&amp;auto=format"
              className={styles.image}
            />
          </Grid>
          <Grid item md={2} sm={4} xs={6} className={styles.header}>
            <img
              src="https://cdn.sanity.io/images/599r6htc/production/5f1418963f6e1ae0a58ad3076b4072a5d9fb35dc-77x77.svg?q=75&amp;fit=max&amp;auto=format"
              className={styles.image}
            />
          </Grid>
          <Grid item md={2} sm={4} xs={6} className={styles.header}>
            <img
              src="https://cdn.sanity.io/images/599r6htc/production/a248c880a228b091529274da0ba81bd707cb5f0e-77x77.svg?q=75&amp;fit=max&amp;auto=format"
              className={styles.image}
            />
          </Grid>
          <Grid item md={2} sm={4} xs={6} className={styles.header}>
            <img
              src="https://cdn.sanity.io/images/599r6htc/production/b4fcd29a8afd5541b04a4f73eef8fa5b78babeac-58x58.svg?q=75&amp;fit=max&amp;auto=format"
              className={styles.image}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Section;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#8dc6d9", // Bug Correction
    color: "black",
    padding: "75px 0",
  },
  container: {
    backgroundColor: "#8dc6d9",
  },
  header: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: 77,
  },
}));
