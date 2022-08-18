import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App'
import { DiaryItemData } from '../types'
import { DiaryEditor } from '../Components/Contents'

const Edit = () => {
	const navigate = useNavigate()
	const diaryData = useContext(DiaryStateContext)
	const { paramId } = useParams()

	const [data, setData] = useState<DiaryItemData | null>(null)

	useEffect(() => {
		let paramsMatchedData = diaryData ? diaryData.find((e) => `${e.id}` === paramId) : diaryData
		if (paramsMatchedData) {
			setData(paramsMatchedData)
		} else {
			navigate('/', { replace: false })
		}
	}, [paramId, diaryData])

	return <div>{data && <DiaryEditor isEdit={true} data={data} />}</div>
}

export default Edit
