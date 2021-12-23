import React from "react";

//import { makeStyles } from '@material-ui/core/styles';
//import { Container } from '@material-ui/core';
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import Section from "../components/section/Section";
import HeaderSection from "../components/section/HeaderSection";
import TextSection from "../components/section/TextSection";
import ImageSection from "../components/section/ImageSection";
import ProductSection from "../components/section/ProductSection";
import BrandSection from "../components/section/BrandSection";
import ClientSection from "../components/section/ClientSection";
import About from "../components/section/About";

const Maps = () => {
  return (
    <div style={{ padding: 20, backgroundColor: "#FFF" }}>
      <iframe
        width="100%"
        height="530"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=rua%20teixeira%20de%20golveia%201060&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
};

const Test = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.iconWrapper} style={{ marginBottom: 20 }}>
        <Typography variant="h2">Entre em contato</Typography>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <PhoneIcon fontSize="small" />
        </div>
        <Typography variant="h6" style={{ padding: "8px 0" }}>
          (22) 2222-2222
        </Typography>
      </div>

      <div className={classes.iconContainer}>
        <div className={classes.icon}>
          <WhatsAppIcon fontSize="small" />
        </div>
        <Typography variant="h6" style={{ padding: "8px 0" }}>
          (99) 99999-9999
        </Typography>
      </div>

      <Typography variant="h6" style={{ paddingTop: 20 }}>
        Horário de atendimento:
      </Typography>
      <Typography variant="h6">
        segunda à sexta, das 9h às 17h (exceto feriados).
      </Typography>
    </div>
  );
};

const Image = () => {
  return (
    <img src="https://scontent.fmea1-1.fna.fbcdn.net/v/t39.30808-6/269781149_3046966795577155_3645825888293864442_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=973b4a&_nc_ohc=l3tnIP9uZMkAX-SnUjC&_nc_ht=scontent.fmea1-1.fna&oh=00_AT-YuHUxLABg0aDWsac5aQ5Haco5_lUwaLf2QxCtjLskPQ&oe=61C8FA1F"></img>
  );
};
const HomePage = () => {
  //const styles = useStyles();

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#eef6f9" }}>
        <Section
          firstComponent={<HeaderSection />}
          secondComponent={<ImageSection />}
        />
      </div>
      <BrandSection />
      <div id="nossa-equipe"></div>
      <ProductSection />

      <Section
        firstComponent={<ImageSection />}
        secondComponent={
          <TextSection
            title="Graphic Design Tool"
            subTitle="All the elements you need to create amazing logos, social media graphics, presentations and more, for
          free."
          />
        }
      />

      <div id="quem-somos"></div>
      <Section firstComponent={<About />} secondComponent={<ImageSection />} />

      <Section
        firstComponent={<ImageSection />}
        secondComponent={
          <TextSection
            title="Graphic Design Tool"
            subTitle="All the elements you need to create amazing logos, social media graphics, presentations and more, for
          free."
          />
        }
      />
      <BrandSection />
      <ClientSection />
      <div id="contato"></div>
      <Section firstComponent={<Test />} secondComponent={<Maps />} />
    </React.Fragment>
  );
};

export default HomePage;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
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
}));
