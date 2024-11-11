import {useState} from 'react'
import PropTypes from 'prop-types'

//Lo dejamos afuera evitamos que se cree una funcion cada vez que se renderiza el componente

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter + 1);
    }

    const handleSubstrac = (e) => {
      setCounter(counter - 1);
    }

    const handleReset = (e) => {
      setCounter(value);
    }
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2> 

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstrac }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}