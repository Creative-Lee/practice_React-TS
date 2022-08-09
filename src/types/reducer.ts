import { DiaryItemData } from './index'

type DataReducerInitAction = {
	type: 'INIT'
	data: DiaryItemData[]
}
type DataReducerCreateAction = {
	type: 'CREATE'
	data: DiaryItemData
}
type DataReducerRemoveAction = {
	type: 'REMOVE'
	data: { id: number }
}
type DataReducerEditAction = {
	type: 'EDIT'
	data: DiaryItemData
}

export type DataReducerActions =
	| DataReducerInitAction
	| DataReducerCreateAction
	| DataReducerRemoveAction
	| DataReducerEditAction