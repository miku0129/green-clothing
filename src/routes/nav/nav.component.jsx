import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss"

import { ReactComponent as Shoplogo } from "../../assets/flower-svgrepo-com.svg";

const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Shoplogo className="Shoplogo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
