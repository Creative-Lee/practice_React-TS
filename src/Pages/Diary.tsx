import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import { DiaryStateContext } from '../App'
import { MyButton, MyHeader } from '../Components/Common'
import { DiaryItemData } from '../types'
import { getStringDate } from '../util/date'
import { emotionList } from '../util/emotion'

const Diary = () => {
	const diaryData = useContext(DiaryStateContext)
	const { paramId } = useParams()
	const navigate = useNavigate()

	const [data, setData] = useState<DiaryItemData | null>(null)
	useEffect(() => {
		let matchedData = diaryData ? diaryData.find((data) => `${data.id}` === paramId) : diaryData
		if (matchedData) {
			setData(matchedData)
		} else {
			alert('없는 일기입니다.')
			navigate('/', { replace: true })
		}
	}, [diaryData, paramId])

	if (!data) {
		return <div className='DiaryPage'>로딩중입니다...</div>
	} else {
		const currentEmotionData = emotionList.find((e) => e.emotionId === data.emotion)

		return (
			<div className='DiaryPage'>
				<MyHeader
					headText={getStringDate(new Date(data.createdDate))}
					left={
						<MyButton
							text='< 뒤로가기'
							onClick={() => {
								navigate(-1)
							}}
						/>
					}
					right={
						<MyButton
							text='수정하기'
							onClick={() => {
								navigate(`/edit/${data.id}`)
							}}
						/>
					}
				/>
				<article>
					<section>
						<h4>오늘의 감정</h4>
						<div className='diary_img_wrapper'>
							<img alt='img' src={currentEmotionData?.emotionImgSrc} />
							<div className='emotion_deescript'>{currentEmotionData?.emotionDescript}</div>
						</div>
					</section>

					<section>
						<h4> 꽁냥꽁냥</h4>
					</section>
				</article>
			</div>
		)
	}
}

export default Diary
