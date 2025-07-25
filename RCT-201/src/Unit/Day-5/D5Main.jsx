import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from '../../Redux/ReduxD5/store'
import D5Routes from "./D5Routes"

function D5Main() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <D5Routes />
      </Provider >
    </BrowserRouter>
  )
}

export default D5Main
