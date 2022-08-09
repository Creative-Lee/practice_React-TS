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
      newState = [action.data, ...state]
      break
    }

    case 'REMOVE': {
      newState = state.filter((e) => e.id !== action.data.id)
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

  return newState
}