import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as testActions from '../../redux/modules/test'; 
import {Row, Col, Button} from 'antd';

import Search from '../../components/search';
export class HomeTest extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){}

    componentWillReceiveProps(nextProps){}

    render(){
        const {test}=this.props;
        return(
            <div>
                <Row>
                    <Col offset={6} span={6}><h2>Master:{test.test}</h2></Col>
                    <Col span={6}><Button type="primary" onClick={()=>this.handleClick()}>click</Button></Col>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <Col offset={6} span={6}><Search value={test.test} /></Col>
                </Row>
                <Row>
                    <Col><ul><li><Link to="test">to test</Link></li></ul></Col>
                </Row>
            </div>
        )
    }
    handleClick() {
        const {testActions}=this.props;
        const flag=(Math.floor((Math.random()*10))%2 ) ? 'who is hlp' : 'now is lz'
        testActions.test(flag)
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        test:state.test.toJS()
    }
}
function mapDispatchToProps(dispatch) {
    return {
        testActions:bindActionCreators(testActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeTest);
