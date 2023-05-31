export const jobReducer = (state, action) => {
  const {type, payload} = action

  switch(type) {
    case 'ADD_PART':
      return {...state, partList: payload.parts}

    case 'UPDATE_PART':
      return {...state, partList: payload.parts, total: payload.total}

    case 'REMOVE_PART':
      return {...state, partList: payload.parts}

    case 'CLEAR_PARTS':
      return {...state, partList: payload.parts, total: payload.total}

    case 'UPDATE_TOTAL':
      return {...state, total: payload.total}

    default:
      throw new Error('No case found in jobReducer')
  }
}