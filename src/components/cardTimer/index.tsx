import { useState, useEffect } from "react";
import { Button, Typography, Paper, Slider, styled } from "@mui/material";

export default function PomodoroTimer() {
  const [time, setTime] = useState<number>(25 * 60);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sessionLength, setSessionLength] = useState<number>(25);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      
    } else if (time === 0) {
      setIsRunning(false);
      endAudio.play()
      
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);
  
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  
  const startAudio = new Audio('/public/sounds/start.mp3')
  const stopAudio = new Audio('./public/sounds/stop.mp3')
  const endAudio = new Audio('./public/sounds/end.mp3')
  
  const handleStartPause = (): void => {
    setIsRunning(!isRunning);
    startAudio.play()

  };
  
  const handleReset = (): void => {
    setIsRunning(false);
    setTime(sessionLength * 60);
    stopAudio.play()
  };

  const handleSessionChange = (_event: Event, newValue: number | number[]): void => {
    if (typeof newValue === "number") {
      setSessionLength(newValue);
      setTime(newValue * 60);
    }
  };

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

  return (
        <div>
            <h1>
      {formatTime(time)}
            </h1>
      <CustomButton variant="contained" color="primary" onClick={handleStartPause} style={{ marginRight: 10 }} >
           {isRunning ? "Pause" : "Start"}</CustomButton>     
     
      <CustomButton variant="contained" color="secondary" onClick={handleReset}>
        Reset
      </CustomButton>
      <h4  style={{ marginTop: 20,color:'#babbba'}}>Defina o tempo da sessão: {sessionLength} min</h4>
      <Slider style={{color:'#babbba'}}
        value={sessionLength}
        min={1}
        max={60}
        step={1}
        onChange={handleSessionChange}
        />
        </div>
  );
}
