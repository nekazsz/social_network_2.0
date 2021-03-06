import React from "react";
import style from "./Header.module.css";
import { connect } from "react-redux";
import { logout } from "../../Redux/auth-reducer";
import { closeMenu, openMenu } from "../../Redux/side-bar-reducer";
import { NavLink } from "react-router-dom";

const HeaderContainer = (props) => {

	const { logout, openMenu } = props

	const getLogout = () => {
		logout();
	}

	const actionOpenMenu = () => {
		openMenu()
	}

	return (
		<header className={ `${ style.header }` }>
			<NavLink to="/profile">
				<div className={ style.logo }>LOGO</div>
			</NavLink>
			<div className={ style.menuBtn_visible }>
				<button onClick={ actionOpenMenu }>Menu</button>
			</div>
			<div className={ style.actionLogout_box }>
				<button onClick={ getLogout }>Logout</button>
			</div>
		</header>
	);
}

export default connect(null, { logout, openMenu, closeMenu })(HeaderContainer);