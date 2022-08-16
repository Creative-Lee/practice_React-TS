type SortOption = {
	value: string
	name: string
}

type ControlMenuProps = {
	value: string
	setValue: (option: string) => void
	optionList: SortOption[]
}

const ControlMenu = ({ value, setValue, optionList }: ControlMenuProps) => {
	return (
		<select
			className='ControlMenu'
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			{optionList.map((option, idx) => (
				<option key={idx} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default ControlMenu
