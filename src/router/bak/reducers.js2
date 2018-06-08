import { user as typeUser } from './actionTypes'

// console.log(typeUser)

const login = (state = 0, active) => {
  if (active.type === typeUser.LOGIN) {
    return 1
  }
  return state
}

const intitle = (state = 'baby', active) => {
  if (active.type === typeUser.INTITLE) {
    return active.name
  }
  return state
}

export {
  login,
  intitle
}
