import React, { useContext } from 'react'
import Entry from './Entry'
import { AppContext } from '../contexts'
import { FILTER } from '../constants'

function getFilteredEntries(entries, filter) {
  const entriesArr = Object.keys(entries).map(id => ({ ...entries[id], id }))
  if (filter === FILTER.ALL) return entriesArr
  if (filter === FILTER.HAVE) {
    return entriesArr.filter(entry => entry.have)
  } else {
    return entriesArr.filter(entry => !entry.have)
  }
}

export default function EntriesList() {
  const [{ entries, filter }, { toggleEntry, removeEntry }] = useContext(AppContext)
  const filteredEntries = getFilteredEntries(entries, filter)

  return (
    <ul className="entries-list">
      {filteredEntries && filteredEntries.length
        ? filteredEntries.map(entry =>
            <Entry
              key={`entry-${entry.id}`}
              entry={entry}
              onToggle={toggleEntry}
              onRemove={removeEntry}
            />
          )
        : "No entries"}
    </ul>
  )
}
