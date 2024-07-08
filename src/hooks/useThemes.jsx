import { useEffect, useState } from "react";

const useTheme = (initialTheme) => {
   
   const [theme ,setTheme ] = useState(initialTheme);
   const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'light');  

   useEffect( () => {
    document.body.setAttribute('data-theme', theme);

   }, [theme]);
   
   
    return [theme, handleChange];
}
 
export default useTheme;