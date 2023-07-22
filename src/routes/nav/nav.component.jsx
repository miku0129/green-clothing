import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../compoments/cart-icon/cart-icon.component";
import CartDropdown from "../../compoments/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Shoplogo } from "../../assets/evergreen-icon-svgrepo-com.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./nav.styles.scss";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { cartContext} = useContext(CartContext); 

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shoplogo className="Shoplogo" />
        </Link>
        <div className="nav-links-container">
          {currentUser && <span>Hello, {currentUser.email}</span>}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <div>
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            </div>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {cartContext && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
