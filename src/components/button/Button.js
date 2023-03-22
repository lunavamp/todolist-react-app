import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const Button = styled(MuiButton)(() => ({
  borderRadius: "10px",
  color: "#44A0A0",
  textTransform: "capitalize",
  fontWeight: "800",
  fontSize: "20px",
  "&:hover": {
    color: "#F7ECDE",
  },
}));

export default Button;
