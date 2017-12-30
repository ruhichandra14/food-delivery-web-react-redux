export default function(state = null , action){
	switch (action.type){
		case 'REQUEST_SUCCESS':
		return action.payload;

		case 'REQUEST_REJECTED':
		return state;

		case 'REQUEST_PENDING':
		return state;
	}
	return state;
}

