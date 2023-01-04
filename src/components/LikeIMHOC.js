import CounterHOC from "./CounterHOC"

 function LikeIMHOC(props) {

  
    return (
      <div>
        <button onClick={props.handleCounter}>Like Post {props.counter} </button>
      </div>
    )
  }

  export default CounterHOC(LikeIMHOC)