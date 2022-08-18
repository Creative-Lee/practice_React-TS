import React, { useReducer, useRef, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import { Edit, Diary, Home, New } from './Pages'

import { dataReducer } from './reducer'
import { DiaryItemData, DispatchContext } from './types'
import './App.scss'

import { OnCreate, OnRemove, OnEdit } from './types'

export const DiaryStateContext = React.createContext<DiaryItemData[] | null>(null)
export const DiaryDispatchContext = React.createContext<DispatchContext>({} as DispatchContext)

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
	const onEdit: OnEdit = (createdDate, content, id, emotion) => {
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

	useEffect(() => {
		const localData = localStorage.getItem('diary')

		if (localData) {
			const parseData: DiaryItemData[] = JSON.parse(localData)
			const diaryData = parseData.sort((a, b) => b.id - a.id)
			dataId.current = diaryData[0].id + 1

			dispatch({ type: 'INIT', data: diaryData })
		}
	}, [])

	return (
		<DiaryStateContext.Provider value={data}>
			<DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
				<div className='App'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/new' element={<New />} />
						<Route path='/diary/:paramId' element={<Diary />} />
						<Route path='/edit/:paramId' element={<Edit />} />
					</Routes>
				</div>
			</DiaryDispatchContext.Provider>
		</DiaryStateContext.Provider>
	)
}

export default App
