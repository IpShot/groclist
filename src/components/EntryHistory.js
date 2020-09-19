import React from 'react'

const EntryHistory = ({ history }) => (
  <div className="entry-history">
    {history.map((d, i) => <div key={i}>{d.toString()}</div>)}
  </div>
)

export default EntryHistory
