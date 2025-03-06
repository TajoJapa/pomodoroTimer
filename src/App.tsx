import { green } from '@mui/material/colors'
import './App.css'
import PomodoroTimer from './components/cardTimer'
import SpeedDialHome from './components/speedDial'
import YouTubePlayer from './components/spotifyPlayer'

function App() {


  return (
    <>
      <div>
      <h1 style={{color:'#babbba'}}>Pomodoro Timer </h1>
        <PomodoroTimer></PomodoroTimer>
        <YouTubePlayer></YouTubePlayer>
      </div>
      <div className="card" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "20px" }}>
      </div>
      
    </>
  )
}

export default App
