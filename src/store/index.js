export const initialState = {
  activeStep: 'menu',
  userPick: null,
  currentMode: null,
  currentScore: 0,
}

export const rootReducer = (state, action) => {
  switch (action.type) {
    case 'STEP':
      return {
        ...state,
        activeStep: action.payload,
      }
    case 'USER_PICK':
      return {
        ...state,
        userPick: action.payload,
      }
    case 'MODE':
      return {
        ...state,
        currentMode: action.payload,
      }
    case 'SCORE':
      return {
        ...state,
        currentScore: action.payload,
      }
    case 'CLEAR':
      return {
        ...initialState,
      }
    default:
      return state
  }
}
