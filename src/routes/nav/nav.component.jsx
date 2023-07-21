import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Shoplogo } from "../../assets/evergreen-icon-svgrepo-com.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./nav.styles.scss";

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
