import React, { useState } from 'react'
import { MyButton, MyHeader, DiaryEditor } from '../Components'
import { useNavigate } from 'react-router-dom'

const New = () => {
	return (
		<div className='New'>
			<DiaryEditor />
		</div>
	)
}

export default New
