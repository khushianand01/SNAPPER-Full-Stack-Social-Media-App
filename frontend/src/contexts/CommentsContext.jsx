import React, { createContext, useContext, useState } from "react";

export const CommentsContext = createContext();

// export const useComments = () => useContext(CommentsContext)

const CommentsContextProvider = ({ children }) => {
    const [comments, setComments] = useState(["A", "B", "C", "D"])
    return (
            <CommentsContext.Provider value={{value: 100}}>
                {children}
            </CommentsContext.Provider>
        )

};

export default CommentsContextProvider;
