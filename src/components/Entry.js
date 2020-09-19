import React from 'react'

const Entry = ({ entry, onToggle, onRemove }) => (
  <li className="entry-item">
    <span onClick={() => onToggle(entry.id)}>
      {entry.content} {entry.priority} {entry && entry.have ? 'have' : 'ran out'}
    </span>
    <button className="remove-entry" onClick={() => onRemove(entry.id)}>x</button>
  </li>
)

export default Entry
