import './App.css'
import RenderDay2 from './Unit/Day-1/RenderDay2'
import GenericComponent from './Unit/Day-2/GenericComponent'
import D3Counter from './Unit/Day-3/D3Counter'
import Counter from "./Unit/previousUnitRecap/Counter"
import FormWithReducer from "./Unit/previousUnitRecap/FormWithReducer"
import D4Main from "./Unit/Day-4/D4Main"
import D5Main from './Unit/Day-5/D5Main'
import D6Main from './Unit/Day-6/D6Main'
import PSCCounter from './Unit/PSC-S2/PSCCounter'
import PSCTheme from './Unit/PSC-S2/PSCTheme'
import { Provider } from 'react-redux'
import { store } from './Redux/Redux-Psc-S2/store'
import CrudMain from './Unit/CRUD/CrudMain'
function App() {

  return (
    <>
      {/* Previous unit quick revision ... */}
      {/* <Counter /> */}
      {/* <FormWithReducer /> */}
      {/* Day - 1 We Will learn & create some Custom Hooks today ... */}
      {/* <RenderDay2 /> */}
      {/* Day - 2 We will learn to create own Generic Components ... */}
      {/* <GenericComponent /> */}
      {/* Day - 3 We will learn seting up redux and it's store...  */}
      {/* <D3Counter /> */}
      {/* Day - 4 we will learn react-redux to update states... */}
      {/* <D4Main /> */}
      {/* Day - 5 We Will learn configuration of redux with local storage or if we have multiple reducers ans states... */}
      {/* <D5Main /> */}
      {/* Day - 6 We Will Learn Redux Thunk Todau... */}
      {/* <D6Main /> */}
      {/* PSC -> Day - 7  Problem Solving Class Sprint - 2 .... */}
      {/* <Provider store={store}>
        <PSCTheme />
      </Provider > */}
      {/* Its Day - 8 We Will Learn Full CURD */}
      <CrudMain />

    </>
  )
}

export default App
