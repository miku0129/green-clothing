import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Shoplogo } from "../../assets/evergreen-icon-svgrepo-com.svg";
import { UserContext } from "../../contexts/user.context";

import "./nav.styles.scss";

const Nav = () => {
  const {currentUser} = useContext(UserContext)
  console.log("current user: ", currentUser)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shoplogo className="Shoplogo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
