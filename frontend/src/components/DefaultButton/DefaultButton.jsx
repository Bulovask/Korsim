import { Link } from 'react-router-dom'
import './DefaultButton.scss'

function DefaultButton(props) {
  const {children, type, to, className} = props;
  const classNames = 'DefaultButton ' + className
  const allProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => ['type', 'children', 'to', 'className'].indexOf(key) === -1)
  )

  if(type === 'link' && to) 
  return <Link {...allProps} className={classNames} to={to}>
      {children}
    </Link>
  
  return <button {...allProps} className={classNames} type={type || 'button'}>
      {children}
    </button>
}

export default DefaultButton