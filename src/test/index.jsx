import React, {Component} from 'react';
import {Card} from 'antd';

export class Test extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){}

    componentWillReceiveProps(nextProps){}

    render(){
        return(
            <div>
                <div>card</div>
                <Card title="test page" />
            </div>
        )
    }
}