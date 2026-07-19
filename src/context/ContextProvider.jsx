import { createContext, useState } from "react"

export const themeContext = createContext();

const ContextProvider = ({children}) => {
  const [isDark,setIsDark] = useState(false);
  const toggle = () => setIsDark(pre => !pre);

  return (
    <themeContext.Provider value={{isDark,toggle}}>
        {children}
    </themeContext.Provider>
  )
}

export default ContextProvider