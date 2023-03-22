import { createTheme } from "@mui/material";

const light = {
  palette: {
    background: {
      default: "#F7ECDE",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        sx: {
          background: "#38938A",
          borderRadius: "10px",
          width: { xs: 200, sm: 400, md: 500 },
          "& .MuiInputBase-root": {
            height: 40,
          },
          "& input": {
            fontWeight: 800,
            fontSize: "20px",
            marginBottom: "10px",
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          background: "#54BAB9",
          padding: { xs: "10px 7px", sm: "10px 20px" },
          margin: "20px 0",
          borderBottom: "5px solid #38938A",
          borderRadius: "10px",
        },
      },
    },
  },
};

const dark = {
  palette: {
    background: {
      default: "#1C273C",
    },
    text: {
      primary: "#ffffff",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        sx: {
          background: "#44A0A0",
          borderRadius: "10px",
          width: { sm: 200, md: 500 },
          "& .MuiInputBase-root": {
            height: 40,
          },
          "& input": {
            fontWeight: 800,
            fontSize: "20px",
            marginBottom: "10px",
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          background: "#354259",
          padding: { xs: "10px 7px", sm: "10px 20px" },
          margin: "20px 0",
          borderBottom: "5px solid #44A0A0",
          borderRadius: "10px",
        },
      },
    },
  },
};

export const themeLight = createTheme(light);
export const themeDark = createTheme(dark);
