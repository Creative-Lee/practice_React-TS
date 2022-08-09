export interface DiaryItemData {
	id: number
	content: string
	emotion: number
	createdDate: number
}

export type OnCreate = (createdDate: string, content: string, emotion: number) => void
export type OnRemove = (id: number) => void
export type OnEdit = (data:DiaryItemData) => void


export interface DispatchContext {
	onCreate: OnCreate
	onRemove: OnRemove
	onEdit: OnEdit
}

export type OnChangeHTMLElement = (
	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) => void

