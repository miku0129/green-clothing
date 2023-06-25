import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="linkes-container">
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
