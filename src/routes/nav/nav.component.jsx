import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import CartIcon from "../../compoments/cart-icon/cart-icon.component";
import CartDropdown from "../../compoments/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Shoplogo } from "../../assets/evergreen-icon-svgrepo-com.svg";

import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./nav.styles";

const Nav = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { toggleCartDropdown } = useContext(CartContext);

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
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            </div>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {toggleCartDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
