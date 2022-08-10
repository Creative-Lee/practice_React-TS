import React, { useState } from 'react'
import { DiaryItemData } from '../types'

const sortOptionList = [
	{ value: 'lastest', name: '최신순' },
	{ value: 'oldest', name: '오래된 순' },
]
type SortOption = {
	value: string
	name: string
}

type ControlMenuProps = {
	value: string
	onChange: (option: string) => void
	optionList: SortOption[]
}
const ControlMenu = ({ value, onChange, optionList }: ControlMenuProps) => {
	return (
		<select value={value} onChange={(e) => onChange(e.target.value)}>
			{optionList.map((option, idx) => (
				<option key={idx} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

type DiaryListProps = {
	diaryData: DiaryItemData[]
}
const DiaryList = ({ diaryData }: DiaryListProps) => {
	const [sortType, setSortType] = useState('lastest')

	const getProcessedDiaryList = () => {
		let cloneList: DiaryItemData[] = JSON.parse(JSON.stringify(diaryData))

		if (sortType === 'lastest') {
			cloneList.sort((a, b) => b.createdDate - a.createdDate)
		} else {
			cloneList.sort((a, b) => a.createdDate - b.createdDate)
		}
		return cloneList
	}

	return (
		<div>
			<ControlMenu
				value={sortType}
				onChange={setSortType}
				optionList={sortOptionList}
			/>
			{getProcessedDiaryList().map((data) => (
				<div key={data.id}>{data.content}</div>
			))}
		</div>
	)
}
DiaryList.defaultProps = {
	diaryData: [],
}

export default DiaryList
