/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import RNAndroidLifeCycle from 'react-native-android-lifecycle';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_NEW_INTENT, () => {
  console.log("ON_NEW_INTENT");
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_ACTIVITY_RESULT, (e) => {
  console.log("ON_ACTIVITY_RESULT", e);
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_HOST_RESUME, () => {
  console.log("ON_HOST_RESUME");
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_HOST_PAUSE, () => {
  console.log("ON_HOST_PAUSE");
});
RNAndroidLifeCycle.on(RNAndroidLifeCycle.event.ON_HOST_DESTROY, () => {
  console.log("ON_HOST_DESTROY");
});

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    console.log("componentDidMount");
    console.log("END");
  }
  sendIntent(){
    console.log("Push");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button
          onPress={() => { this.sendIntent(123); }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

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
