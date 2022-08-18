export const getStringDate = (date: Date) => {
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

export const dateSortOptionList = [
	{ value: 'latest', name: '최신순' },
	{ value: 'oldest', name: '오래된 순' },
]
