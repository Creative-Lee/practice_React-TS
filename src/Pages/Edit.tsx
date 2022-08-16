import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App'
import { DiaryItemData } from '../types'
import { DiaryEditor } from '../Components/Contents'

const Edit = () => {
	const navigate = useNavigate()
	const diaryData = useContext(DiaryStateContext)
	const { id } = useParams()

	const [data, setData] = useState<DiaryItemData>({} as DiaryItemData)

	useEffect(() => {
		let paramsMatchedData = diaryData.find((e) => `${e.id}` === id)
		if (paramsMatchedData) {
			setData(paramsMatchedData)
		} else {
			navigate('/', { replace: true })
		}
	}, [id, diaryData])

	return <div>{data && <DiaryEditor isEdit={true} data={data} />}</div>
}

export default Edit
