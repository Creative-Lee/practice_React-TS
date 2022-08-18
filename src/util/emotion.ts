import {EmotionItemData } from '../types'


export const emotionList: EmotionItemData[] = [
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

export const emotionSortOptionList = [
	{ value: 'all', name: '전부다' },
	{ value: 'good', name: '좋은 감정만' },
	{ value: 'bad', name: '나쁜 감정만' },
]