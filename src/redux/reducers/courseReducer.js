import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
	switch(action.type) {
		case types.CREATE_COURSE:
			return [ ...state, { ...action.course }]; //this will create a new array with all existing courses + new course passed in
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;
		default:
			return state;
	}
}