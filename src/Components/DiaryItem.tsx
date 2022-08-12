import React from 'react'
import { DiaryItemData } from '../types'
import { MyButton } from './'
import { useNavigate } from 'react-router-dom'
type DiaryItemProps = {
	data: DiaryItemData
}

const DiaryItem = ({ data }: DiaryItemProps) => {
	const navigate = useNavigate()
	const goDetail = () => {
		navigate(`./diary/${data.id}`)
	}
	const goEdit = () => {
		navigate(`./edit/${data.id}`)
	}

	const diaryDate = new Date(data.createdDate).toLocaleDateString()
	return (
		<div className='DiaryItem'>
			<div
				className={[
					'emotion_img_wrapper',
					`emotion_img_wrapper_${data.emotion}`,
				].join(' ')}
				onClick={goDetail}
			>
				<img
					src={`${process.env.PUBLIC_URL}/assets/emotion/emotion${data.emotion}.png`}
					alt='img'
				/>
			</div>
			<div className='info_wrapper' onClick={goDetail}>
				<div className='diary_date'>{diaryDate}</div>
				<div className='diary_content_preview'>{data.content.slice(0, 25)}</div>
			</div>
			<div className='btn_wrapper'>
				<MyButton text='수정하기' onClick={goEdit} />
			</div>
		</div>
	)
}

export default DiaryItem
