import React, { useReducer } from 'react'
import AddEntry from './components/AddEntry'
import EntriesList from './components/EntriesList'
import Filters from './components/Filters'
import appReducer from './reducers/appReducer'
import { FILTER } from './constants'
import './styles.css'

const initialState = {
  entries: {},
  filter: FILTER.ALL
}

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return (
    <div className="app">
      <h1>Groclist</h1>
      <AddEntry />
      <EntriesList />
      <Filters />
    </div>
  )
}
