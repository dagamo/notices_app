import { FETCH_START_NOTICES, SET_NOTICES, FETCH_ERROR_NOTICES } from './../constants/actionTypes';

const commonState = {
	isLoading: false,
	data: [],
	message: ''
};

export const notices = (state = commonState, action) => {
	switch (action.type) {
		case FETCH_START_NOTICES: {
			return {
				...state,
				isLoading: true,
				message: ''
			};
		}
		case SET_NOTICES: {
			return {
				...state,
				notices: action.payload,
				isLoading: false
			};
		}
		case FETCH_ERROR_NOTICES: {
			return {
				...state,
				isLoading: false,
				notices: [],
				message: 'Ha ocurrido un error del servidor'
			};
		}

		default:
			return state;
	}
};
