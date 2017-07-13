import React, {Component} from 'react'
import { DetailList, ButtonDelete, TextList } from './styled'
import { Icon } from 'semantic-ui-react'

class ListExpense extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <DetailList>
                 { this.props.ExpenseList.map((item, index) => ( 
                     <TextList key={item + index}>{item}
                         <ButtonDelete onClick={() => this.props.sendDel(index)}><Icon name='delete'/></ButtonDelete>
                     </TextList>
                 ))
             }
             
            </DetailList>
        )
    }
}

export default ListExpense