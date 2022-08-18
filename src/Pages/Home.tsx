import React, { useContext, useEffect, useState } from 'react'
import { MyHeader, MyButton } from '../Components/Common'
import { DiaryList } from '../Components/Contents'

import { DiaryStateContext } from '../App'
import { DiaryItemData } from '../types'

const Home = () => {
	const diaryData = useContext(DiaryStateContext)
	const [data, setData] = useState<DiaryItemData[]>([])

	const [curDate, setCurDate] = useState(new Date())
	const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`

	const increaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()))
	}
	const decreaseMonth = () => {
		setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()))
	}

	useEffect(() => {
		if (diaryData) {
			if (diaryData.length >= 1) {
				let firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime()
				let lastDay = new Date(
					curDate.getFullYear(),
					curDate.getMonth() + 1,
					0,
					23,
					59,
					59,
				).getTime()

				setData(
					diaryData.filter((data) => firstDay <= data.createdDate && data.createdDate <= lastDay),
				)
			}
		}
	}, [curDate, diaryData])

	return (
		<div className='Home'>
			<MyHeader
				headText={headText}
				left={<MyButton onClick={decreaseMonth} text={'<'} />}
				right={<MyButton onClick={increaseMonth} text={'>'} />}
			/>
			<DiaryList diaryData={data} />
		</div>
	)
}

export default Home
