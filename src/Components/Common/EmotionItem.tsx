import React from 'react'
import { EmotionItemData } from '../../types'

type EmotionItemProps = {
	emotionData: EmotionItemData
	onClick: (emotion: number) => void
	isSelected: boolean
}

const EmotionItem = ({ emotionData, onClick, isSelected }: EmotionItemProps) => {
	return (
		<div
			className={[
				'EmotionItem',
				isSelected ? `EmotionItem_on_${emotionData.emotionId}` : `EmotionItem_off`,
			].join(' ')}
			onClick={() => onClick(emotionData.emotionId)}
		>
			<img alt='img' src={emotionData.emotionImgSrc} />
			<span>{emotionData.emotionDescript}</span>
		</div>
	)
}

export default React.memo(EmotionItem)
