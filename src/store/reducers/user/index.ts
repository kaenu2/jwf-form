import {
	EUserActionsTypes,
	IUserState,
	TUserAction
} from '../../../types/user';

const initialState: IUserState = {
	isError: false,
	isLoading: false,
	user: {},
	token: ''
};

export const userReducer = (
	state = initialState,
	action: TUserAction
): IUserState => {
	switch (action.type) {
		case EUserActionsTypes.FETCH_USER:
			return { ...state, isLoading: true, isError: false, user: [] };
		case EUserActionsTypes.FETCH_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				user: action.payload,
				token: action.payload.token
			};
		case EUserActionsTypes.FETCH_USER_ERROR:
			return { ...state, isLoading: false, isError: true, user: {} };
		case EUserActionsTypes.LOGOUT_USER:
			return { ...state, user: {}, token: '' };
		default:
			return state;
	}
};
