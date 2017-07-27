import React from "react";


export default class Menu extends React.Component{
	render(){
		return(
		<li>{this.props.textoItem}</li>
		);
	}
}