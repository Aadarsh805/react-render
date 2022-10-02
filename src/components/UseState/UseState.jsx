import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("rendered");
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
    </>
  );
};

export default UseState;
