import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import Style from './Css';

class Music extends Component {
  render() {
    return (
      
      <View style={Style.container}>
        <View style={Style.cover}>
          <Image 
          style={Style.coverImg}
          source={require('../../Static/cover.png')} 
          resizeMode="center"/>
        </View>
        <View style={Style.intro}>
          <Text>歌曲信息123</Text>
        </View>
        <View style={Style.story}>
          <Text>《传奇字体》本纪录片讲述了Helvetica字体从起源诞生
          到它的特性和影响力，影片访谈了不同时期的老中青三代设计师，
          畅谈这款简洁、直接、醒目的传奇字体背后的故事。对于字体设计
          这个领域的门外汉来说，真是没想到这里面还有这么多门道。
          《传奇字体》本纪录片讲述了Helvetica字体从起源诞生
          到它的特性和影响力，影片访谈了不同时期的老中青三代设计师，
          畅谈这款简洁、直接、醒目的传奇字体背后的故事。对于字体设计
          这个领域的门外汉来说，真是没想到这里面还有这么多门道。
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = Music;