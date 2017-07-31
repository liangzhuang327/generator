import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Input, Icon} from 'antd';

class SearchControl extends Component{
    constructor(props){
        super(props);
        this.handleControl=this.handleControl.bind(this);
        this.state={}
    }

    handleControl(){
        return(
            <div>
                <Input 
                value={this.props.ownValue} 
                onChange={()=>this.handleOnchange()} 
                suffix={<Icon onClick={()=>this.handleClick()} type="search"/>} 
                readOnly
                ref="searchText"
                size="large"
                />
                <Input type="textarea" value={this.state.textarea ? this.state.textarea : ''}/>
            </div>
        )
    }
    handleClick() {
        switch(this.refs.searchText.props.value){
            case 'who is hlp':
                this.setState({textarea:'she is girl'});
                return
            case 'now is lz':
                this.setState({textarea: 'yes, he is boy'});
                return
        }
    }
    render(){
        const control=this.handleControl();
        return (
            control
        )
    }
}

const mapStateToProps=(state, ownProps) => {
    //console.log(ownProps);
    let ownValue;
    if(ownProps.value){
        ownValue=ownProps.value;
    }else{
        ownValue='ownValue=null,用ownProps来更新父组件props传入的属性和用componentWillReceiveProps来更新父组件传入到子组件的props的比较';
    }
    return{
        ownValue
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         testActions:bindActionCreators(testActions,dispatch)
//     }
// }

export default connect(mapStateToProps)(SearchControl);