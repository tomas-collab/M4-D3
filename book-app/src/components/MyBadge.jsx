import {Button} from 'react-bootstrap'

const MyBadge = (props) =>(
    <Button variant={props.color}>
  {props.name}
  <span className="sr-only">unread messages</span>
</Button>

)

export default MyBadge