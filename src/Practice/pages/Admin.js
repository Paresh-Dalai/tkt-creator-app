




import './users.css' ;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  let [user, setUser] = useState({
    name: "",
    userType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("Token");

    if (token) {
      let name = localStorage.getItem("UserName");
      let type = localStorage.getItem("UserType");

      if (name && type && type == "ADMIN") {
        setUser({
          name: name,
          userType: type,
        });
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <h1  className="welcome_users">
      Hello {user?.name} as an {user.userType} welcome to our portal
    </h1>
  );
}

export default Admin;