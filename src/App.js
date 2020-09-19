import React, { useMemo, useReducer } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect 
} from 'react-router-dom'
import List from './pages/List'
import Entry from './pages/Entry'
import appReducer from './reducers/appReducer'
import { AppContext } from './contexts'
import * as actions from './actions'
import { FILTER } from './constants'
import './styles.css'

const initialState = {
  entries: {},
  filter: FILTER.ALL
}

function useActions(dispatch) {
  return useMemo(() => ({
    addEntry(content, priority) {
      dispatch(actions.addEntry(content, priority))
    },
    toggleEntry(id) {
      dispatch(actions.toggleEntry(id))
    },
    removeEntry(id) {
      dispatch(actions.removeEntry(id))
    },
    setFilter(filter) {
      dispatch(actions.setFilter(filter))
    }
  }), [dispatch])
}

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const appActions = useActions(dispatch)
  const context = useMemo(() => [state, appActions], [state, appActions])
  return (
    <AppContext.Provider value={context}>
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/entry/:id" children={<Entry />} /> 
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}
