import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true"
  });

  const login = (data) => {
    setUser({
      token: data.token,
      userId: data.userId,
      isLoggedIn: true
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("isLoggedIn", true);
  };

  const logout = () => {
    setUser({
      token: null,
      userId: null,
      isLoggedIn: false
    });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.setItem("isLoggedIn", false);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
