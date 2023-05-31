import { createContext, useContext, useReducer } from 'react';
import { jobReducer } from '../reducer/jobReducer';

let partsStorage = localStorage.getItem('partList')
let totalStorage = localStorage.getItem('priceTotal')

let parts = []
let priceTotal = 0

if (partsStorage) parts = JSON.parse(partsStorage)
if (totalStorage && typeof totalStorage !== null) priceTotal = JSON.parse(totalStorage)

const initialState = {
  partList: parts,
  total: priceTotal
}

const JobContext = createContext(initialState)

export const JobProvider = ({children}) => {

  const [state, dispatch] = useReducer(jobReducer, initialState)

  const addPart = (part) => {
    const updatedPartList = state.partList.concat(part)
    updateTotal(updatedPartList)
    setStorage(updatedPartList)
    dispatch({
      type: 'ADD_PART',
      payload: {
        parts: updatedPartList
      }
    })
  }

  const removePart = (id) => {
    const updatedPartList = state.partList.filter(part => part.id !== id)
    updateTotal(updatedPartList)
    setStorage(updatedPartList)
    dispatch({
      type: 'REMOVE_PART',
      payload: {
        parts: updatedPartList
      }
    })
  }

  const updatePart = (part) => {
    const partIndex = state.partList.map(p => p.id).indexOf(part.id)
    const arrCopy = [...state.partList]
    arrCopy[partIndex].name = part.name
    arrCopy[partIndex].price = part.price
    arrCopy[partIndex].quantity = part.quantity
    arrCopy[partIndex].total = part.total
    let total = 0
    arrCopy.forEach(p => total += p.total)
    updateTotal(arrCopy)
    setStorage(arrCopy)
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        parts: arrCopy,
        total
      }
    })
  }

  const clearParts = () => {
    dispatch({
      type: 'CLEAR_PARTS',
      payload: {
        parts: [],
        total: 0
      }
    })
    localStorage.removeItem('partList')
    localStorage.removeItem('priceTotal')
  }

  const updateTotal = (parts) => {
    let total = 0
    parts.forEach(p => total += p.total)
    localStorage.setItem('priceTotal', JSON.stringify(total))
    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        total
      }
    })
  }

  const setStorage = (parts) => {
    localStorage.setItem('partList', JSON.stringify(parts))
  }

  const value = {
    partList: state.partList,
    total: state.total ? state.total : 0,
    addPart,
    removePart,
    clearParts,
    updatePart
  }

  return (
    <JobContext.Provider value={value}>
      {children}
    </JobContext.Provider>
  )
}

export const useJob = () => {
  const context = useContext(JobContext)
  return context
}