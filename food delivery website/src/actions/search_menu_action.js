import * as types from '../constants/actionType';
import axios from 'axios';
import {    ROOT_URL    } from '../constants/actionType';


export function searchMenu(event){
	var data = event.target.value.substr(0, 15);
	var SEARCH_VALUE = data;
	var url = `${ROOT_URL}`


	return function(dispatch){	
		axios({
                method: 'get',
                url : url
        })
		.then((response)=>{
			var array = [];
			array.push(data, response.data);
				dispatch({
				type : 'REQUEST_SUCCESS',
        		payload	: array
			});			
		})
		.catch((error)=>{
			dispatch({
				type: 'REQUEST_REJECTED',
				error: error
			});
		});
	};

	return {type: 'REQUEST_PENDING'};
}
