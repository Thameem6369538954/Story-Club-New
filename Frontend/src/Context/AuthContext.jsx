import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [position, setPosition] = useState(" ");
  var [activeCategory, setActiveCategory] = useState("Select Category");
  var [storyTitle, setStoryTitle] = useState("");



  return (
    <AuthContext.Provider value={{ position, setPosition,activeCategory, setActiveCategory,storyTitle, setStoryTitle }}>
      {children}
    </AuthContext.Provider>
  );
}
