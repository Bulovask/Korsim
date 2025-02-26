import './DefaultAnchor.scss'

function DefautAnchor(props) {
  const attributes = {...props}
  delete attributes['children']
  delete attributes['className']
  delete attributes['disabled']
  delete attributes['data-disabled']

  const className = 'DefaultAnchor ' + props.className

  return <>
    <a data-disabled={!!props.disabled} className={className} {...attributes}>
      {props.children}
    </a>
    <span data-disabled={!!props.disabled} className={className} {...attributes}>
      {props.children}
    </span>
  </>
}

export default DefautAnchor