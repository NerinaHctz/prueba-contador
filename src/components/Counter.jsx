import { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => setCount((prevState) => (prevState < 10 ? prevState + 1 : prevState))

    const decrement = () => setCount((prevState) => (prevState > 0 ? prevState - 1 : prevState))

    const reset = () => setCount(0)

    return <div className='counter-box'>
        <h3>{count}</h3>

        <div>
            <button onClick={() => increment(1)}>Incrementar</button>
            &nbsp;
            <button onClick={() => decrement(1)}>Decrementar</button>
            &nbsp;
            <button onClick={() => reset()}>Reiniciar</button>
        </div>
    </div >

}
