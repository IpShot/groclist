import { FILTER } from '../constants'
import { ADD_ENTRY, TOGGLE_ENTRY, REMOVE_ENTRY, SET_FILTER } from '../actions'

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_ENTRY: {
      const { id, content, priority } = action.payload
      return {
        ...state,
        entries: {
          ...state.entries,
          [id]: {
            content,
            priority,
            have: state.filter !== FILTER.RAN_OUT,
            history: []
          }
        }
      }
    }
    case TOGGLE_ENTRY: {
      const { id } = action.payload
      return {
        ...state,
        entries: {
          ...state.entries,
          [id]: {
            ...state.entries[id],
            have: !state.entries[id].have,
            history: [
              ...state.entries[id].history,
              new Date()
            ]
          }
        }
      }
    }
    case REMOVE_ENTRY: {
      const { id } = action.payload
      delete state.entries[id]
      return { 
        ...state 
      }
    }
    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload.filter
      }
    }
    default:
      return state
  }
}
