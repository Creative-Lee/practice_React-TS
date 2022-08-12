import React, { useRef, useState, useContext } from 'react'
import { MyButton, MyHeader, EmotionItem } from './'
import { useNavigate } from 'react-router-dom'
import { EmotionItemData } from '../types'
import { DiaryDispatchContext } from '../App'

const getStringDate = (date: Date) => {
	let year = date.getFullYear()
	let month: number | string = date.getMonth() + 1
	let day: number | string = date.getDate()

	if (month < 10) {
		month = `0${month}`
	}

	if (day < 10) {
		day = `0${day}`
	}

	return `${year}-${month}-${day}`
}

const emotionList: EmotionItemData[] = [
	{
		emotionId: 1,
		emotionImgSrc: `${process.env.PUBLIC_URL}/assets/emotion/emotion1.png`,
		emotionDescript: 'cool',
	},
	{
		emotionId: 2,
		emotionImgSrc: `${process.env.PUBLIC_URL}/assets/emotion/emotion2.png`,
		emotionDescript: 'good',
	},
	{
		emotionId: 3,
		emotionImgSrc: `${process.env.PUBLIC_URL}/assets/emotion/emotion3.png`,
		emotionDescript: 'soso',
	},
	{
		emotionId: 4,
		emotionImgSrc: `${process.env.PUBLIC_URL}/assets/emotion/emotion4.png`,
		emotionDescript: 'bad',
	},
	{
		emotionId: 5,
		emotionImgSrc: `${process.env.PUBLIC_URL}/assets/emotion/emotion5.png`,
		emotionDescript: 'terrible',
	},
]

const DiaryEditor = () => {
	const { onCreate } = useContext(DiaryDispatchContext)
	const navigate = useNavigate()
	const contentRef = useRef<HTMLTextAreaElement | null>(null)
	const [content, setContent] = useState<string>('')
	const [emotion, setEmotion] = useState<number>(3)
	const [date, setDate] = useState<string>(getStringDate(new Date()))

	const handleClickEmotion = (emotion: number) => {
		setEmotion(emotion)
	}
	const handleSubmit = () => {
		if (content.length < 1) {
			contentRef.current?.focus()
			return
		}
		onCreate(date, content, emotion)
		navigate('/', { replace: true })
	}

	return (
		<div className='DiaryEditor'>
			<MyHeader
				headText='새로운 일기 쓰기'
				left={
					<MyButton
						text='< 뒤로가기'
						onClick={() => {
							navigate(-1)
						}}
					/>
				}
			/>
			<div>
				<section>
					<h4>오늘은 언제인가요?</h4>
					<div className='input-box'>
						<input
							className='input_date'
							type='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</section>
				<section>
					<h4>오늘의 감정</h4>
					<div className='input_box emotion_list_wrapper'>
						{emotionList.map((emotionData) => (
							<EmotionItem
								key={emotionData.emotionId}
								emotionData={emotionData}
								onClick={handleClickEmotion}
								isSelected={emotionData.emotionId === emotion}
							/>
						))}
					</div>
				</section>
				<section>
					<h4>오늘의 일기</h4>
					<div className='input_box text_wrapper'>
						<textarea
							ref={contentRef}
							value={content}
							onChange={(e) => setContent(e.target.value)}
							placeholder='오늘 하루는 어때?'
						/>
					</div>
				</section>
				<section>
					<div className='control_box'>
						<MyButton text='작성완료' type='positive' onClick={handleSubmit} />
					</div>
				</section>
			</div>
		</div>
	)
}

export default DiaryEditor
