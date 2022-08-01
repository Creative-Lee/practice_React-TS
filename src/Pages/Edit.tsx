import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const Edit = () => {
	const [searchParams, setSearchparams] = useSearchParams()

	const id = searchParams.get('id')
	const mode = searchParams.get('mode')
	const who = searchParams.get('who')
	const navigate = useNavigate()

	return (
		<div>
			<h1>Edit</h1>
			<p>일기 수정페이지</p>
			<button
				onClick={() => {
					setSearchparams({ who: 'bobob' })
				}}
			>
				QS 바꾸기
			</button>

			<button onClick={() => navigate('/home')}>홈으로</button>
		</div>
	)
}

export default Edit
