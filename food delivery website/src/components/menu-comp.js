import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Geolocation from 'react-geolocation';
import JsonTable from 'react-json-table';

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData : {},
            searchData : ''
        }
    }

    componentWillMount(){
        this.props.fetchMenuCuisine();
    }


    componentWillReceiveProps(nextProps) {
        this.props=nextProps;
        if(this.props.menuDataJSON){
            this.setState({menuData : this.props.menuDataJSON[1],
                searchData : this.props.menuDataJSON[0]})
        }
    }

    renderMenuList(){

        if(this.props.menuDataJSON && this.state.searchData.length > 0){
            if(this.state.searchData.toLowerCase() == this.state.menuData.ship.ship_name.toLowerCase()){
                console.log('data------- ',this.state.menuData.ship.ship_name.toLowerCase() == this.state.searchData.toLowerCase());
                debugger;
                let items = this.state.menuData.menu.menu_items;
                return(
                    <div>
                        <h3 className = "table-heading">MENU</h3>
                        <JsonTable rows = {items} />
                    </div>
                )
            }
            else{
                return(
                    <div className = "error-info-container">
                        <span className ="error-msg">Oops, looks like we are not there yet!</span>
                    </div>
                )
            }
        }
        else{
            let cuisineData = this.props.menuCuisineDataJSON;
            return(
                <ul>
                    {cuisineData.map((cuisineType) => { 
                        return(
                            Object.keys(cuisineType).map((cuisineItem) =>  {  
                                return(
                                   <li className = "menu-cuisine-item"><img className="cuisine-image" src={cuisineType[cuisineItem]} alt={cuisineItem}/>{cuisineItem}</li>
                                )

                            }) 
                        )
                    })}
                </ul>
            )
        }
    }


    render() {
        return (
            <div>
                <header className = "main-header"><a href = "https://petoo.in/"><img src="https://d39in59pr3ya79.cloudfront.net/n/images/petoo-footer-logo.png" className="img-petoo-logo" alt="Petoo Logo"/></a></header>
                <section>
                    <div className = "display-food-images"></div>
                    <article className = "description-container">
                        <div className = "menu-container">
                            <label htmlFor="To Find Menu" className="menu-label">To Find Menu</label>
                            <input onChange={(event) => this.props.searchMenu(event)} ref="searchMenu"  className = "search-menu" type = "search" placeholder = "Type Your Location"/>
                            <Geolocation
                            render={({
                                fetchingPosition,
                                position: { coords: { latitude, longitude } = {} } = {},
                                error,
                                getCurrentPosition
                            }) =>
                                <div className = "geolocation-container">
                                <button className ="search-location" onClick={this.clickFunction}>Locate Me</button>
                                {error &&
                                    <div>
                                        {error.message}
                                    </div>}
                                    <span className = "latitude-info" ref="userLatitude">{latitude}</span>
                                    <span className = "longitude-info" ref="userLongitude">{longitude}</span>
                                    </div>}
                                />
                        </div>
                        {this.renderMenuList()}
                    </article>
                </section>
            </div>
        )
    }
}