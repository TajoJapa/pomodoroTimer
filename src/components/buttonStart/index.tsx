import { Button } from "@mui/material";
import { styled } from "@mui/system";



const CustomButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
  },
});
;

const StartButton = () => {
  return <CustomButton>
    Iniciar</CustomButton>;
};

export default StartButton;