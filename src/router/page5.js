import React from 'react'

import {
  Route,
  Link
} from 'react-router-dom'

const one = () => {
  return <div>5. one</div>
}

const two = () => {
  return <div>5. two</div>
}

const there = () => {
  return <div>5. there</div>
}

const Page5 = ({ match }) => {
  console.log(match)

  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/super`}>5. super</Link>
        </li>
        <li>
          <Link to={`${match.url}/chao`}>5. chao</Link>
        </li>
        <li>
          <Link to={`${match.url}/lin`}>5. lin</Link>
        </li>
      </ul>

      <Route exact path={match.url} render={() => (
        <div>default 5</div>
      )} />
      <Route path={`${match.url}/:id`} component={component} />
    </div>
  )
}

const component = ({match}) => {

  console.log(match)
  return <div>{match.params.id}</div>
}

export default Page5
