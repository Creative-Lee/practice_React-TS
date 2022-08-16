export interface DiaryItemData {
	id: number
	content: string
	emotion: number
	createdDate: number
}

export interface EmotionItemData{
	emotionId: number
	emotionImgSrc: string
	emotionDescript:  string
}

export interface DispatchContext {
	onCreate: OnCreate
	onRemove: OnRemove
	onEdit: OnEdit
}

export type OnCreate = (createdDate: string, content: string, emotion: number) => void
export type OnRemove = (id: number) => void
export type OnEdit = (createdDate: string, content: string, id:number, emotion: number) => void

export type OnChangeHTMLElement = (
	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
) => void


