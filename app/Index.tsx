/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component, Fragment } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { toastBottom } from './utils/utils';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

class Index extends Component<any> {

  public render() {
    console.log(this.props);
    const { count } = this.props.index;
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.tsx</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text>{count}</Text>
          <Button title={'加'} onPress={this.add(1)}/>
          <Button title={'减'} onPress={this.add(-1)}/>
        </View>
      </Fragment>
    );
  }

  private add = count => () => {
    this.props.dispatch({ count, type: 'index/edit' });
  }
}

export default connect((state) => {
  return { ...state };
})(Index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
