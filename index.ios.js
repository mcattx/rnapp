/**
 * A Simple React Native App
 * https://github.com/titancat/rnapp
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  Text
} from 'react-native';

const TabBarItemIOS = TabBarIOS.Item;

import Tab1 from './App/View/tab1';
import Tab2 from './App/View/tab2';

class rnapp extends Component {
  //导航
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      notifyCount: 0,
      presses: 0
    }
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selected} unselectedTintColor="white" tintColor="yellow" barTintColor="darkslateblue">
        <TabBarItemIOS 
          title="Blue Tab" 
          systemIcon="favorites" 
          selected={this.state.selectedTab ==='blueTab'}
          onPress={() => {
            this.setState({
              selected: 'blueTab',
            })
          }}
        >
        <Text>blueTab</Text>
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Red Tab"
          systemIcon="contacts" 
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab'
            })
          }}
        >
        <Text>redTab</Text>
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Purple Tab"
          systemIcon="more" 
          selected={this.state.selectedTab === 'purpleTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'purpleTab'
            })
          }}
        >
        <Text>purpleTab</Text>
        </TabBarItemIOS>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
  }
});

// class rnapp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('rnapp', () => rnapp);
