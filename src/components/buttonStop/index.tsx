import { Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  background: "linear-gradient(45deg,rgb(158, 64, 84) 30%,rgb(170, 94, 53) 90%)",
  border: 0,
  borderRadius: 25,
  boxShadow: "0px 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "0.3s",
  "&:hover": {
    background: "linear-gradient(45deg,rgb(165, 92, 53) 30%,rgb(161, 66, 86) 90%)",
  },
});



const StopButton = () => {
  return <CustomButton>Parar</CustomButton>;
};

export default StopButton;