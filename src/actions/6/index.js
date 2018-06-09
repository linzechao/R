import {
  GET_LOADING,
  START_GET,
  NEXT_LOADING
} from '@/actionTypes/6'

const setData = (list) => {
  return {
    type: GET_LOADING,
    list
  }
}

const setNextData = (list) => {
  return {
    type: NEXT_LOADING,
    list
  }
}

const startGetData = (isStart) => {
  return {
    type: START_GET,
    start: isStart
  }
}

export {
  setData,
  setNextData,
  startGetData
}
