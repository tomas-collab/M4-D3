import {Component} from 'react'
import{Card} from 'react-bootstrap'


class SingleBook extends Component{
  state = {
      selected:false
      
  }
    render(){
        return(  

             <Card style={{ width: '18rem' }} onClick={(e)=>this.setState({selected:!this.state.selected})}
             style={{shadow:this.state.selected? '5px,5px,20px':'none'}}>
             <Card.Img variant="top" src={this.props.item.img} 
                className='block mx-auto w-1/2'  style={{
                        resizeMode: "contain",
                        height:this.state.selected? 210: 200,
                        width:this.state.selected?210: 200
                      }}/>
                     <Card.Body>
                    <Card.Title>{this.props.item.title}</Card.Title>
                    </Card.Body>
                </Card>
             
                )
            }
        }
export default SingleBook
