import CounterHOC from "./CounterHOC"

 function PostHOC(props) {

  
    return (
      <div>
        <button onClick={props.handleCounter}>Like Post {props.counter}</button>
      </div>
    )
  }
  
  export default CounterHOC(PostHOC)