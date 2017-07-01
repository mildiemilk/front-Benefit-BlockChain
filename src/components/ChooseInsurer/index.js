import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../Sidebar'
import {Detail,Head} from './styled'
class InsurerSelect extends Component{

    constructor(props) {
        super(props)
        this.state = {
            step: 4,
        }
    }
  

    render(){
     
        return(
            <div className='ChooseInsurer'>
                <NavInsure step={this.state.step}/>
                <div className='row'>
                    <Detail className='large-12 columns'>
                        <div className='row'>
                            <div className='large-10 columns'>
                                <Head>เลือกบริษัทประกันภัยที่ต้องการ</Head>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='large-10  columns'>

                            </div>
                        </div>
                    </Detail>
                   
                </div>
            </div>
        )
    }
}
export default InsurerSelect
