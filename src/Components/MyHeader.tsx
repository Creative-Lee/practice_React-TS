import React, { ReactNode } from 'react'

type MyHeaderProps = {
	headText: string
	left: ReactNode
	right: ReactNode
}

const MyHeader = ({ headText, left, right }: MyHeaderProps) => {
	return (
		<header>
			<div className='head_btn_left'>{left}</div>
			<div className='head_text'>{headText}</div>
			<div className='head_btn_right'>{right}</div>
		</header>
	)
}

export default MyHeader
