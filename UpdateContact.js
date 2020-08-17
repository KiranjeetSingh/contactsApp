//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button,Alert } from 'react-native'

// import all basic components

export default class UpdateContact extends Component {

    constructor(props) {
        
        super(props);
        const item = this.props.navigation.getParam('data');
        const index  = this.props.navigation.getParam('index');
        this.state = {
            name: item.name,
            mobile: item.mobile,  
            landline: item.landline,
            itemIndex:index
         }
    
    }
  //Screen2 Component
 handleName = (text) => {
    this.setState({ name: text })
 }
 handleMobile = (text) => {
    this.setState({ mobile: text })
 }
 handleLandline = (text) => {
  this.setState({ landline: text })
}
//var ki = {}
//ki["name"]=data.name

onSave() {
  //const { name, mobile } = this.state;

  //Alert.alert('Credentials', `${name} + ${mobile}`);

  const { navigation } = this.props;
  navigation.goBack();
  navigation.state.params.onUpdate({ 'name': this.state.name,'mobile':this.state.mobile,'index':this.state.itemIndex });
}
  render() {
    const item = this.props.navigation.getParam('data');
    return (
      <View style={styles.root}>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Name</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={this.handleName}
      value={this.state.name}
      style={styles.textInput}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Mobile</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={this.handleMobile}
      value={this.state.mobile}
      style={styles.textInput}
    />
  </View>
  <View style={styles.rowContainer}>
    <Text style={styles.text}>Landline</Text>
    <TextInput
      autoCorrect={false}
      onChangeText={this.handleLandline}
      value={this.state.landline}
      style={styles.textInput}
    />
  </View>
  <View style={ styles.rowContainer} >
                  <Button style={styles.bottomView}
                  title="Update"
                  onPress={this.onSave.bind(this)}
                  />
               </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
  },
  rowContainer: {
    height: 40,
    flexDirection: "row",
    marginTop:30,
    padding:20,
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{

    width:60
  },
  bottomView:{
    
         width: '100%', 
         height: 50, 
         backgroundColor: '#FF9800', 
         justifyContent: 'center', 
         alignItems: 'center',
         position: 'absolute',
         bottom: 0
       },
    
  Button: {
    position: 'absolute',
    bottom:0,
    left:0,
},
  
  textInput: {
    flex: 1,
    backgroundColor: 'white', 
    borderColor: 'black',
    marginLeft:10,
    height: 40,
     borderColor: 'gray',
      borderWidth: 1
  }
})