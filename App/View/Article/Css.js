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
  listContainer: {
    paddingTop: 20,
    height: 300
  },
  articleBox: {
    padding: 10,
    height: 100,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderStyle: 'solid'
  },
  articleTitle: {
    fontSize: 16,
    color: '#666',
  },
  articleDesc: {
    fontSize: 12,
    color: '#999',
  },
  articlePic: {
    width: 48,
    height: 48
  }
});