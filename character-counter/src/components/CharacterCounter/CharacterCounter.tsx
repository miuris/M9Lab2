import { CharacterCounterProps } from "../../../types";
import React from 'react'

export default function CharacterCounter() {
  return (
    <div>
      <h3>Counter : {state.count}</h3>

      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
