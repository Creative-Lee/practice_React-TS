import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Edit, Diary, Home, New } from './Pages'
import RouteTest from './Components/RouteTest'
import './App.scss'

const App = () => {
	return (
		<div className='App'>
			<h2>App.js</h2>

			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/new' element={<New />} />
				<Route path='/diary/:id' element={<Diary />} />
				<Route path='/edit' element={<Edit />} />
			</Routes>
			<RouteTest />
		</div>
	)
}

export default App
