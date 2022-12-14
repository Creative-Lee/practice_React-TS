import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DiaryItemData } from '../../types'
import DiaryItem from './DiaryItem'
import { MyButton, ControlMenu } from '../Common'
import { dateSortOptionList } from '../../util/date'

import { emotionSortOptionList } from '../../util/emotion'

type DiaryListProps = {
	diaryData: DiaryItemData[]
}

const DiaryList = ({ diaryData }: DiaryListProps) => {
	const navigate = useNavigate()
	const [dateSortType, setdateSortType] = useState('latest')
	const [emotionSortType, setEmotionSortType] = useState('all')

	const getSortedDiaryList = () => {
		let cloneList: DiaryItemData[] = JSON.parse(JSON.stringify(diaryData))

		if (dateSortType === 'latest') {
			cloneList.sort((a, b) => b.createdDate - a.createdDate)
		} else {
			cloneList.sort((a, b) => a.createdDate - b.createdDate)
		}

		const emotionSortCallback = (data: DiaryItemData) => {
			if (emotionSortType === 'all') return data.emotion <= 5
			if (emotionSortType === 'good') return data.emotion <= 3
			if (emotionSortType === 'bad') return data.emotion >= 4
		}

		cloneList = cloneList.filter(emotionSortCallback)

		return cloneList
	}

	return (
		<div className='DiaryList'>
			<div className='menu_wrapper'>
				<div className='left_col'>
					<ControlMenu
						value={dateSortType}
						setValue={setdateSortType}
						optionList={dateSortOptionList}
					/>
					<ControlMenu
						value={emotionSortType}
						setValue={setEmotionSortType}
						optionList={emotionSortOptionList}
					/>
				</div>
				<div className='right_col'>
					<MyButton
						text='새 일기쓰기'
						type='positive'
						onClick={() => {
							navigate('./new')
						}}
					/>
				</div>
			</div>

			{getSortedDiaryList().map((data) => (
				<DiaryItem key={data.id} data={data} />
			))}
		</div>
	)
}

DiaryList.defaultProps = {
	diaryData: [],
}

export default DiaryList
