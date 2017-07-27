import React from "react";
import ListaMenu from "./ListaMenu.jsx"

export default class Menu extends React.Component{
	render(){
		return(
			<ul>
				<ListaMenu textoItem="perrito"/>
				<ListaMenu textoItem="gatito"/>
			</ul>
		);
	}
}
 
