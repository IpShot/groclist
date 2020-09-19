import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts'

const AddEntry = () => {
  const [input, setInput] = useState('')
  const [priority, setPriority] = useState(1)
  const [_, actions] = useContext(AppContext)

  function handleAddEntry() {
    if (input.trim()) {
      actions.addEntry(input, priority)
      setInput('')
    }
  }
  
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        {[1, 2, 3, 4, 5].map(i => <option key={i} value={i}>{i}</option>)}
      </select>
      <button className="add-entry" onClick={handleAddEntry}>
        Add Entry
      </button>
    </div>
  )
}

export default AddEntry;
