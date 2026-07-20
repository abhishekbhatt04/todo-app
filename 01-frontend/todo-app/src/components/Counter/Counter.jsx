import { useState } from "react";
import CounterButton from "./CounterButton";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementorParent(by) {
    setCount(count + by)
  }

  function decrementorParent(by) {
    setCount(count - by)
  }

  function resetCounter(){
    setCount(0)
  }

  return (
    <>
      <span className="ParentCount">{count}</span>
      <CounterButton
        by={1}
        incrementorParent={incrementorParent}
        decrementorParent={decrementorParent}
      />
      <CounterButton
        by={2}
        incrementorParent={incrementorParent}
        decrementorParent={decrementorParent}
      />
      <CounterButton
        by={5}
        incrementorParent={incrementorParent}
        decrementorParent={decrementorParent}
      />
      <button className="ResetButton" onClick={resetCounter}>
        RESET
      </button>
    </>
  );
}

// function CounterButton({ by,incrementorParent,decrementorParent}) {
//   const [count, setCount] = useState(0);

//   function incrementor() {
//     setCount(count + by);
//     incrementorParent(by);
//   }

//   function decrementor() {
//     setCount(count - by);
//     decrementorParent(by);
//   }
//   //   const buttonStyle={
//   //           fontSize:"30px",
//   //           backgroundColor:"#00a5ab",
//   //           margin:"10px",
//   //           padding:"10px",
//   //           width:"100px",
//   //           borderRadius:"30px",
//   //           border:"3px solid black ",
//   //           color:"white"
//   //   };

//   return (
//     <div className="Counter">
//       {/* <span className="Count">{count}</span> */}
//       <div>
//         <button className="Button" onClick={incrementor}>
//           +{by}
//         </button>
//         <button className="Button" onClick={decrementor}>
//           - {by}
//         </button>
//       </div>
//     </div>
//   );
// }
