import React from 'react'

type MyButtonProps = {
	text: string
	type: string
	onClick(): void
}

const MyButton = ({ text, type, onClick }: MyButtonProps) => {
	const buttonType = ['positive', 'negative'].includes(type) ? type : 'default'
	return (
		<button
			className={['MyButton', `MyButton_${buttonType}`].join(' ')}
			onClick={onClick}
		>
			{text}
		</button>
	)
}

MyButton.defaultProps = {
	type: 'default',
}

export default MyButton
