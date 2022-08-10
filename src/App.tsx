import React, { useReducer, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Edit, Diary, Home, New } from './Pages'

import { dataReducer } from './reducer'
import { DiaryItemData } from './types'
import './App.scss'

import { OnCreate, OnRemove, OnEdit } from './types'

export const DiaryStateContext = React.createContext<DiaryItemData[]>([])
export const DiaryDispatchContext = React.createContext({})

const App = () => {
	const dummyData: DiaryItemData[] = [
		{
			id: 1,
			emotion: 1,
			content: '일기1번',
			createdDate: 1660120966196,
		},
		{
			id: 2,
			emotion: 2,
			content: '일기2번',
			createdDate: 1660120966197,
		},
		{
			id: 3,
			emotion: 3,
			content: '일기3번',
			createdDate: 1660120966198,
		},
		{
			id: 4,
			emotion: 4,
			content: '일기4번',
			createdDate: 1660120966199,
		},
		{
			id: 5,
			emotion: 5,
			content: '일기5번',
			createdDate: 160120966200,
		},
	]
	const [data, dispatch] = useReducer(dataReducer, dummyData)
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
					<Routes>
						<Route path='/' element={<Home />} />
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
