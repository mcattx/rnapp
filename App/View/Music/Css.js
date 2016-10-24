import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImg: {
    height: 350,
  },
  intro: {
    flex: 1,
    marginTop: 0,
    height: 20
  },
  story: {
    flex: 1,
    marginTop: 0,
    height:30,
  }
});