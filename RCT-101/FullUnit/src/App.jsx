import React from "react"
import { BrowserRouter } from "react-router-dom"
import Props from "./Unit/Day-1/Props.jsx"
import Todo from "./Unit/Day-2/Todo.jsx"
import CricketScoreBoard from "./Unit/Day-3/CricketScoreBoard.jsx"
import Posts from "./Unit/Day-4/Posts.jsx"
import Timer from "./Unit/Day-5/Timer.jsx"
import ReffTimer from "./Unit/Day-6/ReffTimer.jsx"
import TimerUsereff from "./Unit/Day-6/TimerUsereff.jsx"
import FormsHandeling from "./Unit/Day-6/FormsHandeling.jsx"
import FetchAndDisplay from "./Unit/Day-7/FetchAndDisplay.jsx"
import Main from "./Unit/Day-8/Main.jsx"
import DayNine from "./Unit/Day-9/DayNine.jsx"


function App() {

  return (
    <>
      {/* Day -1 Understanding Props ---- */}
      {/* <Props /> */}
      {/* Day -2 Understanding states in react using useState ---- */}
      {/* <Todo /> */}
      {/* Day -3 Understanding useState by building  Cricket Scoreboard mini app*/}
      {/* <CricketScoreBoard /> */}
      {/* Day -4 Understanding useEffect using fetch and paginatiom ...*/}
      {/* <Posts /> */}
      {/* Day -5 Understanding useEffect by bilding timer and it's cleanup function */}
      {/* <Timer /> */}
      {/* Day -6 Understanding useRef by bilding timer again but including more features to it along with cleanup function  */}
      {/* <TimerUsereff /> */}
      {/* <FormsHandeling /> */}
      {/* Day -7 This is gonna be revision day I will create a admin panle where we fetch / post and display data */}
      {/* <FetchAndDisplay /> */}
      {/* Day -8 I will use Context api to build Auth Tool or may be theme tool */}
      {/* <Main /> */}
      {/* Day -9 We will cover Routing and a real world project today */}
      <BrowserRouter>
        <DayNine />
      </BrowserRouter>
    </>
  )
}

export default App
