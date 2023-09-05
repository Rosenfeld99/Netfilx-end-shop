import { Provider } from 'react-redux'
import '../src/styles/App.css'
import AppRoutes from './router/AppRoutes'
import myStore from './redux/store'

function App() {

  return (
    <Provider store={myStore}>
      <AppRoutes/>
    </Provider>
  )
}

export default App
