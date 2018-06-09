import {
  GET_LOADING,
  NEXT_LOADING
} from '@/actionTypes/6'

import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case GET_LOADING:
      return action.list

    case NEXT_LOADING:
      return [...state, ...action.list]

    default:
      return state
  }
}

export default combineReducers({
  list
})
