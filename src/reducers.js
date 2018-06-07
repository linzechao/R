export function login (state = 0, active) {
  if (active.type === typeUser.LOGIN) {
    return 1
  }
  return state
}

export function intitle (state = 'baby', active) {
  if (active.type === typeUser.INTITLE) {
    return active.name
  }
  return state
}
