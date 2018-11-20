import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';
import store, {
  IncrementActionCreator,
  DecrementActionCreator,
  SexActionCreator,
} from '../store';

class Count extends PureComponent {
  constructor() {
    super();
    this.state = {
      num: store.getState().numReducer.num,
      girlOrBoy: store.getState().sexReducer.girlOrBoy,
    };
  }

  componentDidMount() {
    // 订阅state变化
    store.subscribe(() => {
      this.setState({
        num: store.getState().numReducer.num,
        girlOrBoy: store.getState().sexReducer.girlOrBoy,
      });
    });
  }

  onIncrement = () => {
    store.dispatch(IncrementActionCreator());
  };

  onDecrement = () => {
    store.dispatch(DecrementActionCreator());
  };

  onSelectSex = sex => {
    store.dispatch(SexActionCreator(sex));
  };

  render() {
    const { num, girlOrBoy } = this.state;
    return (
      <View style={styles.content}>
        <Text>redux</Text>
        <View style={styles.item}>
          <Button title="-" onPress={this.onDecrement} />
          <Text>{num}</Text>
          <Button title="+" onPress={this.onIncrement} />
        </View>
        <View style={styles.item}>
          <Button
            title="男孩"
            onPress={() => {
              this.onSelectSex(1);
            }}
          />
          <Text>{girlOrBoy ? '男孩' : '女孩'}</Text>
          <Button
            title="女孩"
            onPress={() => {
              this.onSelectSex(0);
            }}
          />
        </View>
      </View>
    );
  }
}

export default Count;
