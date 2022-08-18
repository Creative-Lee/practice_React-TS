import { Reducer } from 'react'
import { DiaryItemData } from '../types'
import { DataReducerActions } from '../types/reducer'

export const dataReducer  :Reducer<DiaryItemData[],DataReducerActions >= (state, action) => {
  let newState = []
  switch (action.type) {
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {    
      newState = [...state,action.data]
      
      break
    }

    case 'REMOVE': {
      newState = state.filter((e) => e.id !== action.data.id)
      if(newState.length === 0){
        localStorage.removeItem('diary')
        return newState
      }
      break
    }

    case 'EDIT': {
      newState = state.map((e) =>
        e.id === action.data.id ? { ...action.data } : e,
      )
      break
    }

    default:
      return state
  }
  
  localStorage.setItem('diary',JSON.stringify(newState)) 

  return newState
}