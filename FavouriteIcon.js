import React, { Component } from 'react';
//import react in our code.
import { View, Text} from 'react-native'

class FavouriteIcon extends React.Component {
    
     
    
      constructor (props) {
        super(props)
        this.state = { isSelected: props.isSelected}
      }
      render = () => <Icon
                       containerStyle={{padding: 10}}
                       type='entypo'
                       name={this.state.isSelected ? 'star' : 'star-outlined'}
                       onPress={() => {
                                  this.setState({isSelected: !this.state.isSelected})
                                  this.props.onToggle(!this.state.isSelected)
                                }} />
    
     
    
    }