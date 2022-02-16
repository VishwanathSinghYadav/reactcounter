import React, {Component} from 'react';




export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        count : props.initialCount
        }

    }

    render(){
        return (
            <>
            <div>State Component</div>
            <button onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={() => this.changeCount(+1)}>+</button></>)}

    changeCount(amount){
        this.setState({count: this.state.count + amount}) //count is 1
        this.setState(prevState => {
            return {count: prevState.count+ amount}
        }) // count becomes 2 as prevstate count is 1

        /* the above code is seting object with object making it sycnronus.
        it will change/update/prev the count and keep it with it. next time 
        inside a function prevState is called it will give the current value of state 
       */

        this.setState(prevState => {
            return {count: prevState.count + amount}
        }) // count becomes 3 as prevstate count is 2

       /* this.setState({count: this.state.count + amount})
        the above code is seting state with object making it asycnronus 
        no matter how many times we duplicate the code/ run the same code
        count value is again and again taken from constructor state that is 0.
        so the answe will be 1.   
       */

        this.setState({count: this.state.count + amount}) 
        //count again becomes 1 as the constructor class state had count 0 
   
    }

}


