import {Component} from 'react'
import{Card} from 'react-bootstrap'


class SingleBook extends Component{
    render(){
        return(  
                     
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.props.item.img} 
                className='block mx-auto w-1/2'  style={{
                        resizeMode: "contain",
                        height: 200,
                        width: 200
                      }}/>
                     <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    </Card.Body>
                </Card>
             
                )
            }
        }
export default SingleBook
