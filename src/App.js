import React, { useMemo, useReducer } from 'react'
import AddEntry from './components/AddEntry'
import EntriesList from './components/EntriesList'
import Filters from './components/Filters'
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
      <div className="app">
        <h1>Groclist</h1>
        <AddEntry />
        <Filters />
        <EntriesList />
      </div>
    </AppContext.Provider>
  )
}
