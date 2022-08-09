import React, { useReducer, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Edit, Diary, Home, New } from './Pages'
import { MyButton, MyHeader } from './Components'
import { dataReducer } from './reducer'
import { DiaryItemData } from './types'
import './App.scss'

import { OnCreate, OnRemove, OnEdit } from './types'

export const DiaryStateContext = React.createContext<DiaryItemData[]>([])
export const DiaryDispatchContext = React.createContext({})
const App = () => {
	const [data, dispatch] = useReducer(dataReducer, [])
	const dataId = useRef(0)
	const onCreate: OnCreate = (createdDate, content, emotion) => {
		dispatch({
			type: 'CREATE',
			data: {
				id: dataId.current,
				createdDate: new Date(createdDate).getTime(),
				content,
				emotion,
			},
		})
		dataId.current += 1
	}
	const onRemove: OnRemove = (id) => {
		dispatch({ type: 'REMOVE', data: { id: id } })
	}
	const onEdit: OnEdit = ({ id, createdDate, content, emotion }) => {
		dispatch({
			type: 'EDIT',
			data: {
				id,
				createdDate: new Date(createdDate).getTime(),
				content,
				emotion,
			},
		})
	}

	return (
		<DiaryStateContext.Provider value={data}>
			<DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
				<div className='App'>
					<h2>App.js</h2>

					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/new' element={<New />} />
						<Route path='/diary/:id' element={<Diary />} />
						<Route path='/edit' element={<Edit />} />
					</Routes>
				</div>
			</DiaryDispatchContext.Provider>
		</DiaryStateContext.Provider>
	)
}

export default App
