import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as testActions from '../../redux/modules/test'; 
import {Row, Col, Button, Card} from 'antd';

import Search from '../../components/search';
export class HomeTest extends Component{
    constructor(props){
        super(props);
        this.testActions=this.props.testActions;
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
                <Row>
                    <Col span={6} offset={6}><Button onClick={()=>this.handleTestImmutable()}>新增一条数据</Button></Col>
                    <Col span={12}>{test.testData.items.map(i=>(
                        <Card key={i.id} title={i.name}><p>生产序列号：{i.id}</p><p>数量：{i.account}</p></Card>
                    ))}</Col>
                </Row>
                <Row>
                    <Col span={6} offset={6}><Button onClick={()=>this.handleImmutableMergeDeep()}>合并对象</Button></Col>
                    <Col span={12}>{test.testData.company.third.name}</Col>
                </Row>
            </div>
        )
    }
    handleClick() {
        const flag=(Math.floor((Math.random()*10))%2 ) ? 'who is hlp' : 'now is lz'
        this.testActions.test(flag)
    }
    handleTestImmutable(){
        this.testActions.testImmutable({id:103,name:'新增一条数据',account:1})
    }
    handleImmutableMergeDeep(){
        const {test}=this.props;
        this.testActions.testImmutableMergeDeep({first:'亚马逊',third:{name:"中等公司",country:"china"}})
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
