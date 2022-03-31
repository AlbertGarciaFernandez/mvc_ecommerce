import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/auth-context";

import { PUBLIC } from "../../constants/routes";

import "./Navbar.scss";

function Navbar({ pageTitle, isLogged, IsCartItems }) {
  //const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!user) {
      navigate(PUBLIC.SIGNIN);
      return;
    }

    //await signOut();
    //logout();
    //history.push(PUBLIC.HOME);
  };

  return (
    <header className="row m-0">
      <Link className="col col-8 p-0" to={PUBLIC.HOME}>
        <div className="col col-8 title p-0 mb-4 font-bold">{pageTitle}</div>
      </Link>
      {user ? (
        <div className="col col-4 d-flex p-0 user-wrapper justify-content-end align-items-start">
          <div className="user-name font-bold medium-text">
            {user && (
              <Link to={`${PUBLIC.USER_INFO}/${user.userId}`}>
                {user.email}
              </Link>
            )}
          </div>
          <Link to={PUBLIC.SIGNOUT}>
            <button transparent>Logout</button>
          </Link>
        </div>
      ) : (
        <div className="col col-4 d-flex p-0 user-wrapper justify-content-end align-items-start">
          <Link to={PUBLIC.SIGNIN}>
            <div className="ms-3 btn btn-outline-dark medium-text">Log in</div>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
