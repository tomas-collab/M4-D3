
import {Alert} from 'react-bootstrap'


const WarningSign = (props) => (
    <Alert variant={'danger'}>
           { props.name}
    </Alert>
  )
  
  export default WarningSign