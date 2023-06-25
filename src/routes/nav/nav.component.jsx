import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <h1>Navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
