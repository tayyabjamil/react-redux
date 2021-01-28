import React, { Component } from 'react';
import { View, Text ,TextInput,Button,FlatList,ActivityIndicator} from 'react-native';
import * as itemActions from '../ReduxStore/actions/Items'
import * as apiActions from '../ReduxStore/actions/thunkApi'

import {useSelector,useDispatch, connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchData } from '../ReduxStore/actions/thunkApi';

 class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    names:'',
    loader:false,
    users:[]
    };
  }
  
  componentDidMount(){
//    if(this.props.userData.loading == true){
// this.setState({loader:true})
//    }else if(this.props.userData.users.length > 0){
//     this.setState({loader:false})

//     this.setState({users:this.props.userData.users})

//     }else if(this.props.userData.error !== ""){
//       this.setState({loader:false})

//       alert("error")
//    }
//     console.log(this.props.userData)
  }
   handleText = (text) => {
    this.setState({names:text})  
}
addItem=()=>{
this.props.addName(this.state.names)
}
fetchData=()=>{
this.props.callApi()
}
  render() {
    return (
      <View style={{    flex: 1,
        margin: '7%',
    }}>
  {this.props.loading == true &&
         <View style={{flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
         <ActivityIndicator size="large" color="grey" />
          </View>
          }
    {this.props.loading == false &&
          <View>
        <Text> Input </Text>
      <TextInput  
      value={this.state.names} 
      placeholder={"enter text"}
          onChangeText={this.handleText} 
                />
      <Button onPress={this.addItem} title='add item'></Button>
      
      <FlatList 
data={this.props.names}
renderItem={name =>
   <View>
   <Text>
    {name.item.name}
</Text>
</View>
}
>
</FlatList>
<FlatList 
data={this.props.users}
renderItem={name =>
   <View>
   <Text>
    {name.item.name}
</Text>
</View>
}
>
</FlatList>

<View>
  <Button title='Fetch Api' onPress={this.fetchData}></Button>
</View>
{this.props.errorApi !== "" && 
  <Text>{this.props.errorApi}</Text>
}
</View>
      }
      </View>

    );
  }
}


const mapStateToProps=(state)=>{
  console.log(state.namesReducer.nameArray)
  return {
    names :state.namesReducer.nameArray,
    userData:state.apiReducer,
    users:state.apiReducer.users,
    errorApi:state.apiReducer.error,
    loading:state.apiReducer.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addName :(name)=>dispatch(itemActions.addName(name)),
    callApi:()=>dispatch(apiActions.callApi())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputComponent)