import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#eef6f9",
        },
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "30px",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
    MuiToolbar: {
      root: {
        height: 110,
      },
    },
    MuiAppBar: {
      root: {
        //boxShadow: 'none'
      },
    },
    MuiContainer: {
      root: {
        backgroundColor: "#FFF",
      },
    },
  },
  typography: {
    h2: {
      fontSize: 24,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      lineHeight: "24px",
      paddingBottom: 16,
      fontWeight: 500,
    },
    h4: {
      fontSize: 18,
      lineHeight: "24px",
      paddingBottom: 16,
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      alignItems: "center",
    },
  },
});

export default theme;
