import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

import CartIcon from "../../compoments/cart-icon/cart-icon.component";
import CartDropdown from "../../compoments/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Shoplogo } from "../../assets/evergreen-icon-svgrepo-com.svg";

import { selectCurrentUser } from "../../store/user/user.selector";
import {
  selectCartItems,
  selectToggleCartDropdown,
} from "../../store/cart/cart.selector";

import { checkUserSession } from "../../store/user/user.action";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./nav.styles";

const Nav = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const toggleCartDropdown = useSelector(selectToggleCartDropdown);
  const cartItems = useSelector(selectCartItems);

  const signoutHandler = () => {
    signOutUser().then(()=>{
      dispatch(checkUserSession());
    })
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Shoplogo className="Shoplogo" />
        </LogoContainer>
        <NavLinks>
          {currentUser && <span>Hello, {currentUser.email}</span>}
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <div>
              <span
                className="nav-link"
                onClick={signoutHandler}
                style={{ cursor: "pointer" }}
              >
                SIGN OUT
              </span>
            </div>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon
            toggleCartDropdown={toggleCartDropdown}
            cartItems={cartItems}
          />
        </NavLinks>
        {toggleCartDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
