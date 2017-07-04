export default function count(state,action){
	var defaultState = {
	year:2015,
	};
	state = state || defaultState;
	console.log("reducer获取的的值："+action.value);
	switch(action.type){
		case 'add':
			return {
			year:state.year + 1
			};
		case 'sub':
			return {
			year:state.year - 1
			};
		case 'init':
			return{
				year:action.value
			};
		default:
			return state;
	}
	
}