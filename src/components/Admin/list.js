import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DivList, NavList, Lists, BoxList } from './styled';
import { getData } from '../../api/admin';

class List extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getData: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
    props.getData();
    console.log('sdfdf');
  }
  renderList = () => {
    console.log('renderlist');
    const { data } = this.props;
    if (data !== undefined && data.length >= 1) {
      console.log('data', data);
      return data.map(item => (
        <AccordionItem
          className="head-style"
          bodyClassName="body-style"
          title={<div className="row">
            <div className="large-6 columns head-tab">
              {item.txId}
            </div>
            <div className="large-3 columns head-tab">
              {item.value.status}
            </div>
            <div className="large-3 columns head-tab">
              {item.timestamp}
            </div>
          </div>}
        >
          <BoxList>
            <Lists>name: {item.value.name}</Lists>
            <Lists>ICD10: {item.value.icd10}</Lists>
            <Lists>price: {item.value.price}</Lists>
            <Lists>hospital: {item.value.hospital}</Lists>
          </BoxList>
        </AccordionItem>
      ));
    }
    return '';
  }
  render() {
    const { data } = this.props;
    console.log('dataRender', data);
    return (
      <div className="row list-style">
        <div className="large-9 columns">
          <DivList>
            <NavList>
              <div className="row">
                <div className="large-6 columns head">
                  Transaction ID
                </div>
                <div className="large-3 columns head">
                  Type
                </div>
                <div className="large-3 columns head">
                  Date
                </div>
              </div>
            </NavList>
            <Accordion>
              {data !== undefined && data.length >= 1
              ? this.renderList()
              : <div />
              }
            </Accordion>
          </DivList>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

const mapStateToProps = state => ({
  data: state.ledger.dataLedger,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
