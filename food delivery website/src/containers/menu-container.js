import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuComponent from '../components/menu-comp'
import { searchMenu } from '../actions/search_menu_action';
import { fetchMenuCuisine } from '../actions/fetch_cuisine_action';

class MenuApp extends Component{
	render(){
		return(
			<div>
				<MenuComponent {...this.props}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		menuDataJSON : state.menuDataJSON,
		menuCuisineDataJSON : state.menuCuisineDataJSON

	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({searchMenu : searchMenu,fetchMenuCuisine: fetchMenuCuisine}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuApp);