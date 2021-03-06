import './Car.css'
import Radium from 'radium'

const Car = props => {
  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 regba(0, 0, 0, .14)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer',
    }

  }

  return (
    <div className='Car' style={style}>
      <h2>Car name: {props.name}</h2>
      <p>Year: {props.year}</p>
      <input 
        type = 'text' 
        onChange = {props.onChangeName} 
        value = {props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Radium(Car);
