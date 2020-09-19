import React, { useContext } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import Entry from '../components/Entry'
import EntryHistory from '../components/EntryHistory'
import { AppContext } from '../contexts'

export default function EntryPage() {
  const { id } = useParams()
  const [{ entries }] = useContext(AppContext)
  const entry = entries[id]
  return entry ? (
    <>
      <h1>Entry</h1>
      <Entry entry={entry} />
      <EntryHistory history={entry.history} />
    </>
  ) : (
    <Redirect to="/" />
  )
}
