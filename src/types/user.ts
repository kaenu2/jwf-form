export interface IUserState {
	isLoading: boolean;
	isError: boolean;
	user: [] | IUser[];
}

export interface IUser {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	token: string;
}

export enum EUserActionsTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

interface IFetchUserAction {
	type: EUserActionsTypes.FETCH_USER;
}
interface IFetchUserActionSuccess {
	type: EUserActionsTypes.FETCH_USER_SUCCESS;
	payload: IUser[];
}
interface IFetchUserActionError {
	type: EUserActionsTypes.FETCH_USER_ERROR;
}

export type TUserAction =
	| IFetchUserAction
	| IFetchUserActionSuccess
	| IFetchUserActionError;
