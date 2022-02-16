import React from "react";
import Counter from "./CounterComponent";
import CounterFunction from "./CounterFunction"

function App() {
  return (<>
    <Counter initialCount={0}/>
    <CounterFunction initialCount={0}/>
    </>);
}
export default App;
