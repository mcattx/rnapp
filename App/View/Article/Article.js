import React, { Component } from 'react';
import {
  ListView,
  View,
  Image,
  Text
} from 'react-native';

import Style from './Css';

class Article extends Component {
  //初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        '打鸡血 | 酒席气氛一片祥和 2016.10.07', 
        '打鸡血 | 心情不好的时候不妨换个发型 2016.10.06', 
        '打鸡血 | 活到现在最辉煌的成就 2016.10.05', 
        '打鸡血 | 写不好文案怎么办 2016.10.04', 
        '打鸡血 | 在地铁上听到一段母子对话 2016.10.03', 
        '打鸡血 | 你到底有没有不会的？ 2016.10.02',
        '打鸡血 | 朋友圈的发展方向 2016.10.01', 
        '打鸡血 | 这个广告牌存在口音问题 2016.09.30', 
        '打鸡血 | 充电五分钟通话两小时的手机很容易买 2016.09.30', 
        '打鸡血 | 娱乐圈很难混 2016.09.29', 
        '打鸡血 | 坐公交给李明启老师让了个座 2016.09.28', 
        '打鸡血 | 读博真的不用买衣服 2016.09.27',  
      ]),
      pic: {
        uri: 'http://ww3.sinaimg.cn/mw690/bcc93f49gw1f8k3hj2p11j20lc0sgq5h.jpg'
      }
    }
  }

  render() {
    let picUrl = {
      uri: 'http://ww3.sinaimg.cn/mw690/bcc93f49gw1f8k3hj2p11j20lc0sgq5h.jpg'
    }
    return (

      <View style={Style.container}>
        <ListView 
          style={Style.listContainer}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View style={Style.articleBox}>
              <Text style={Style.articleTitle}>{rowData}</Text>
              <View style={Style.articleTextBox}>
                <Text style={Style.articleDesc} numberOfLines={2}>充电五分钟通话两小时的手机很容易买充电五分钟通话两小时的手机很容易买充电五分钟通话两小时的手机很容易买充电五分钟通话两小时的手机很容易买</Text>
                <Image source={{uri: 'https://apic.douyucdn.cn/upload/avatar/face/201609/01/bfd919909343472a10e40fa785bc390b_middle.jpg?rltime'}}
                  style={Style.articlePic} 
                  resizeMode='contain'
                  />
              </View>
              
            </View>
          }
        >
        </ListView>
        <Text>This Is Article Page !</Text>
      </View>
    );
  }
}

module.exports = Article;