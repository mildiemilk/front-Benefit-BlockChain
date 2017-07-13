import React, {Component} from 'react'
import { DetailList, ButtonDelete, TextList } from './styled'
import { Icon } from 'semantic-ui-react'

class ListHealth extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <DetailList>
                 { this.props.HealthList.map((item, index) => ( 
                     <TextList key={item + index}>{item}
                         <ButtonDelete onClick={() => this.props.sendDel(index)}><Icon name='delete'/></ButtonDelete>
                     </TextList>
                 ))
             }
             
            </DetailList>
        )
    }
}

export default ListHealth