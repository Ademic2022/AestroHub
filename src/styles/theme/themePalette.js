import { blue, grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: blue[600],
    },

    mainColor: "#0b0f19",
    accent: {
      greenish: "#99d1a6",
      purplish: "#a288ec",
      orangish: "#ffa071",
    },
    sidebar: {
      background: "#111827",
      hoverBg: "#172032",
      hoverMobile: "#3f4554",
      textColor: "#949ca9",
    },
    status: {
      red: "#fc424a",
      orange: "#fea73e",
      green: "#22c38f",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#5f6470",
      secondary: grey[700],
      black: "#000",
      white: "#fff",
    },
    divider: "rgba(129, 139, 156, 0.1)",
    chatBox: "#dfe5f1",

    // Customized colors
    grey: {
      light: "#f2f2f2",
      lightHover: "#ebebeb",
      lightActive: "#d6d6d6",
      normal: "#7b7b7b",
      normalHover: "#6f6f6f",
      normalActive: "#626262",
      dark: "#5c5c5c",
      darkHover: "#4a4a4a",
      darkActive: "#373737",
      darker: "#2b2b2b",
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      fontSize: "80px",
      lineHeight: 1.1,
    },
    body: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "28px",
      letterSpacing: "0em",
      color: "#fff",
      textAlign: "center",
    },
    customBody: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      lineHeight: "28px",
      letterSpacing: "0em",
      color: "#fff",
    },
    body1: {
      fontFamily: "Outfit",
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "28px",
      letterSpacing: "0em",
      color: "#9898A8",
      textAlign: "center",
    },
    body2: {
      fontFamily: "Outfit",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "22px",
      letterSpacing: "0em",
      color: "#fff",
      textAlign: "center",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          width: "233px",
          background: "#18181F99",
          border: "1px solid #5c5c5c",
          borderRadius: "24px",
          marginY: 2,
          height: "47px",
          textTransform: "capitalize",
          "&:hover": {
            backgroundImage: "linear-gradient(to right, #007bff, #22c38f)",
            color: "#fff",
            border: "1px solid #fff",
          },
        },
      },
    },
  },
});