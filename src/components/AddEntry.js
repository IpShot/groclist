import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts'

const AddEntry = () => {
  const [input, setInput] = useState('')
  const [_, actions] = useContext(AppContext)

  function handleAddEntry() {
    if (input.trim()) {
      actions.addEntry(input)
      setInput('')
    }
  }
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button className="add-entry" onClick={handleAddEntry}>
        Add Entry
      </button>
    </div>
  )
}

export default AddEntry;
