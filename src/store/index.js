const initialValues = {
  activeStep: 'menu',
  userPick: null,
  currentMode: null,
  currentScore: 0,
}

export const initialState = localStorage.getItem('rpsState')
  ? JSON.parse(localStorage.getItem('rpsState'))
  : initialValues

export const rootReducer = (state, action) => {
  switch (action.type) {
    case 'STEP':
      localStorage.setItem(
        'rpsState',
        JSON.stringify({ ...state, activeStep: action.payload })
      )
      return {
        ...state,
        activeStep: action.payload,
      }
    case 'USER_PICK':
      localStorage.setItem(
        'rpsState',
        JSON.stringify({ ...state, userPick: action.payload })
      )
      return {
        ...state,
        userPick: action.payload,
      }
    case 'MODE':
      localStorage.setItem(
        'rpsState',
        JSON.stringify({ ...state, currentMode: action.payload })
      )
      return {
        ...state,
        currentMode: action.payload,
      }
    case 'SCORE':
      localStorage.setItem(
        'rpsState',
        JSON.stringify({
          ...state,
          currentScore: action.payload,
          activeStep: 'options',
        })
      )
      return {
        ...state,
        currentScore: action.payload,
      }
    case 'CLEAR':
      localStorage.setItem('rpsState', JSON.stringify(initialValues))
      return {
        ...initialValues,
      }
    default:
      return state
  }
}
