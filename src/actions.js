let entryId = 0

export const ADD_ENTRY = 'ADD_ENTRY'
export const TOGGLE_ENTRY = 'TOGGLE_ENTRY'
export const REMOVE_ENTRY = 'REMOVE_ENTRY'
export const SET_FILTER = 'SET_FILTER'


export const addEntry = (content, priority) => ({
  type: ADD_ENTRY,
  payload: {
    id: ++entryId,
    content,
    priority
  }
})

export const toggleEntry = (id) => ({
  type: TOGGLE_ENTRY,
  payload: { id }
})

export const removeEntry = (id) => ({
  type: REMOVE_ENTRY,
  payload: { id }
})

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter }
})
