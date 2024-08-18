import React,{createContext, useState} from "react";

const counterContext = createContext();
function CounterProvider({children}){
    const [count, setCount] = useState(0);

    const increment = () =>setCount(count+1);
    const decrement = () => setCount(count-1);

    return(
        <counterContext.Provider value={{count,increment,decrement}}>
            {children}
        </counterContext.Provider>
    );
}

export {counterContext,CounterProvider}