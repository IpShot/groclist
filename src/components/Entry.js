import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts'

export default function Entry({ entry }) {
  const [_, { toggleEntry, removeEntry }] = useContext(AppContext)
  return (
    <div className="entry-item">
      <Link to={`/entry/${entry.id}`}>{entry.content}</Link>
      <span className="entry-item__priority">{entry.priority}</span>
      <span onClick={() => toggleEntry(entry.id)}>
        {entry && entry.have ? 'have' : 'ran out'}
      </span>
      <button className="remove-entry" onClick={() => removeEntry(entry.id)}>x</button>
    </div>
  )
}
