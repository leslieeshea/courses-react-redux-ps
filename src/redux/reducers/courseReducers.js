export default function courseReducer(state = [], action) {
	switch(action.type) {
		case "CREATE_COURSE":
			return [ ...state, { ...action.course }]; //this will create a new array with all existing courses + new course passed in
		default:
			return state;
	}
}