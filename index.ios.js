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

import Article from './App/View/Article/Article';

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
              selectedTab: 'blueTab',
            })
          }}
        >
        <Article />
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
        <Article />
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
        <Article />
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

AppRegistry.registerComponent('rnapp', () => rnapp);
