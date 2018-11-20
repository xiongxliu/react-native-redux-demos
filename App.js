import React, { PureComponent } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Redux from './redux';
import ReactRedux from './react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      model: 'redux',
    };
  }

  render() {
    const { model } = this.state;
    return (
      <View style={styles.container}>
        {model === 'redux' ? (
          <Redux />
        ) : (
          <Provider store={store}>
            <ReactRedux />
          </Provider>
        )}
        <View>
          <Button
            title="Redux"
            style={styles.button}
            onPress={() => {
              this.setState({
                model: 'redux',
              });
            }}
          />
          <Button
            title="React-Redux"
            style={styles.button}
            onPress={() => {
              this.setState({
                model: 'react-redux',
              });
            }}
          />
        </View>
      </View>
    );
  }
}

export default App;
