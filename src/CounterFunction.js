import React, {useState} from "react";

export default function CounterFunction({initialCount}){
    /**const [state, setState] = useState({count: initialCount}) 
      because we have now state only one number, we can take it out of the object */   
    const [count, setCount] = useState(initialCount)
    
    return (
            <>
            <br />
            <div> Functional Component</div>
            <button onClick={()=> setCount(prevCount => prevCount -1)}>-</button>
            <span>{count}</span>
            <button onClick={()=> setCount(prevCount => prevCount +1)}>+</button>
            {/*<button onClick={()=> setState({count: state.count +1})}>+</button>
                we can set state like this also but because now state is not inside an object
                we can make it simple*/}
            </>
            )
}