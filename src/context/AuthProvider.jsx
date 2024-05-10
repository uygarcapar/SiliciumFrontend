import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";
const apiUrl = import.meta.env.VITE_BASE_URL;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth?.user && auth?.accessToken) {
      setUser(auth.user);
      setAccessToken(auth.accessToken);
    }
    setLoading(false);
  }, []);

  const login = async (payload) => {
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const { data } = await response.json();

      // set accesstoken and user data in the local store
      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: data.token,
          user: data.user,
        })
      );

      setUser(data?.user);
      setAccessToken(data?.token);
      message.success("Kayıt işlemi başarılı.");
      return data;

    } catch (error) {
      message.error("Kayıt işlemi başarısız.");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");

    setUser("");
    setAccessToken("");
  }

  const values = {
    login,
    logout,
    user,
    accessToken,
  };

  return <AuthContext.Provider value={values}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
