import react,{Component} from 'react'
import{card}


class Home extends Component{
    render(){
        return(
            <Container className='fluid d-flex justify-content-center'>
                <Row>
                {fantasy.map(fan=>(
                    <Col className="col-lg-3" >
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={fan.img} rounded
                    className='block mx-auto w-1/2'  style={{
                        resizeMode: "contain",
                        height: 200,
                        width: 200
                      }}/>
                     <Card.Body>
                    <Card.Title>{fan.title}</Card.Title>
                     <h3>{fan.price}</h3>
                    </Card.Body>
                </Card>
                </Col>    
                ))}      
     </Row>
</Container>
        )
    }
}

export default Home