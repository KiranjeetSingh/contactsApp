import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Platform, 
    PermissionsAndroid,
    TouchableOpacity,
    Image,
} from 'react-native'; 


import Contacts from 'react-native-contacts';  

const styles = StyleSheet.create({ 
    itemContainer: {
        margin: 10
    },
    contactName: {
        fontSize:16,
        color: 'blue'
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
    
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
      }
})

export default class ContactList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: null
        }
    }
    componentDidMount(){

        
        if(Platform.OS === 'ios'){
          Contacts.getAll((err, contacts) => {
            if (err) {
              throw err;
            }
            // contacts returned
            this.setState({contacts})
          })
        }else if(Platform.OS === 'android'){
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Contacts',
              message: 'This app would like to view your contacts.'
            }
          ).then(() => {
Console.log("permission is :")
           // Contacts.getAll((contacts)=> {  this.setState({contacts:contacts})})
           // Contacts.getAll((err, contacts) => {
            //   if (err === 'denied'){
            //     // error
            //   } else {
            //     // contacts returned in Array
            //     this.setState({contacts})
            //   }
            
          })
        }
        }

    // getList = () => {
    //     Contacts.getAll((err, contacts) => {
    //         if (err === 'denied') {
    //             console.log("cannot access");
    //         } else {
    //             this.setState({ contacts });
    //             console.log(contacts);
    //         }
    //     })
    // }
  //Screen1 Component
  renderItem = ({item}) => (
    <View style={styles.itemContainer}>
        <Text style={styles.contactName}>
            Name: {`${item.givenName} `} {item.familyName}
        </Text>
        {item.phoneNumbers.map(phone => (
            <Text style={styles.phones}>{phone.label} : {phone.number}</Text>
        ))}
    </View>
)
render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.contacts}
                renderItem={this.renderItem}
                //Setting the number of column
                numColumns={1}
                keyExtractor={(item, index) => index}
            />
            <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
        </View>
    )
}
}

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     paddingTop: 20,
//     alignItems: 'center',
//     marginTop: 50,
//     justifyContent: 'center',
//   },
// });