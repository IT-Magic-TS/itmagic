import { createSlice } from '@reduxjs/toolkit';
import { etsyParts } from './data';


const storageData = JSON.parse(localStorage.getItem('etsyBookmarks'))
let favorites = []
let products = []
let totalSum = 0

if (storageData) {
  products = storageData.concat(etsyParts.filter(({id}) => !storageData.find(item => item.id === id)))
  products.sort((a, b) => a.id - b.id)
  favorites = storageData

  totalSum = favorites.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
} else {
  products = etsyParts
}



const advertSlice = createSlice({
  name: 'advert', 
  initialState: {
    advertList: products,
    favoriteList: favorites,
    total: totalSum
  },
  reducers: {
    add(state, action) {
      const activeItem = {...action.payload}
      activeItem.favorite = true
      const updatedFavoriteList = state.favoriteList.concat(activeItem)
      const newArr = [...state.advertList]
      const index = newArr.map(item => item.id).indexOf(activeItem.id)

      const advert = {
        ...newArr[index],
        favorite: true
      }

      const updatedAdvertList = newArr.map(item => {
        if (item.id === activeItem.id) {
          return advert
        } else {
          return item
        }
      })

      const total = state.total + action.payload.price

      localStorage.setItem('etsyBookmarks', JSON.stringify(updatedFavoriteList))
      return {...state, favoriteList: updatedFavoriteList, advertList: updatedAdvertList, total}
    },
    remove(state, action) {
      const activeItem = {...action.payload}
      activeItem.favorite = false
      const updatedFavoriteList = state.favoriteList.filter(item => item.id !== activeItem.id)

      const newArr = [...state.advertList]
      const index = newArr.map(item => item.id).indexOf(activeItem.id)

      const advert = {
        ...newArr[index],
        favorite: false
      }

      const updatedAdvertList = newArr.map(item => {
        if (item.id === activeItem.id) {
          return advert
        } else {
          return item
        }
      })

      const total = state.total - action.payload.price

      localStorage.setItem('etsyBookmarks', JSON.stringify(updatedFavoriteList))
      return {...state, favoriteList: updatedFavoriteList, advertList: updatedAdvertList, total}
    }

  }

})

export const { add, remove, total } = advertSlice.actions
export const advertReducer = advertSlice.reducer