import { Dispatch } from 'redux';

import { TUserAction, EUserActionsTypes } from '../../../types/user';

export const fetchUser = (data: any) => {
	return async (dispatch: Dispatch<TUserAction>) => {
		try {
			dispatch({ type: EUserActionsTypes.FETCH_USER });
			const { username, password } = data;
			await fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: username,
					password: password
				})
			})
				.then(res => res.json())
				.then(data => {
					if (data.message) {
						dispatch({ type: EUserActionsTypes.FETCH_USER_ERROR });
					} else {
						dispatch({
							type: EUserActionsTypes.FETCH_USER_SUCCESS,
							payload: data
						});
					}
				})
				.catch(e => {
					dispatch({ type: EUserActionsTypes.FETCH_USER_ERROR });
				});
		} catch (error) {
			dispatch({ type: EUserActionsTypes.FETCH_USER_ERROR });
		}
	};
};

export const onLogoutUser = () => {
	return (dispatch: Dispatch<TUserAction>) => {
		dispatch({ type: EUserActionsTypes.LOGOUT_USER });
	};
};
