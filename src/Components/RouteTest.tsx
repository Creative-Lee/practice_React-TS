import React from 'react'
import { Link } from 'react-router-dom'
const RouteTest = () => {
	return (
		<div>
			<Link to={'./home'}>Home</Link>
			<Link to={'./diary/:id'}>Diary</Link>
			<Link to={'./edit'}>Edit</Link>
			<Link to={'./new'}>New</Link>
		</div>
	)
}

export default RouteTest
