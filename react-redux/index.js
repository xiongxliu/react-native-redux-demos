import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  IncrementActionCreator,
  DecrementActionCreator,
  SexActionCreator,
} from '../store';
import styles from '../styles';

class Count extends PureComponent {
  static propTypes = {
    num: PropTypes.number.isRequired,
    girlOrBoy: PropTypes.bool.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onSelectSex: PropTypes.func.isRequired,
  };

  render() {
    const {
      num,
      girlOrBoy,
      onDecrement,
      onIncrement,
      onSelectSex,
    } = this.props;
    return (
      <View style={styles.content}>
        <Text>react-redux</Text>
        <View style={styles.item}>
          <Button title="-" onPress={onDecrement} />
          <Text>{num}</Text>
          <Button title="+" onPress={onIncrement} />
        </View>
        <View style={styles.item}>
          <Button
            title="男孩"
            onPress={() => {
              onSelectSex(1);
            }}
          />
          <Text>{girlOrBoy ? '男孩' : '女孩'}</Text>
          <Button
            title="女孩"
            onPress={() => {
              onSelectSex(0);
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  num: state.numReducer.num,
  girlOrBoy: state.sexReducer.girlOrBoy,
});

const mapDispatchToProps = dispatch => ({
  // onDecrement: () => {
  //   dispatch(DecrementActionCreator());
  // },
  onDecrement: bindActionCreators(DecrementActionCreator, dispatch),
  // onIncrement: () => {
  //   dispatch(IncrementActionCreator());
  // },
  onIncrement: bindActionCreators(IncrementActionCreator, dispatch),
  // onSelectSex: sex => {
  //   dispatch(SexActionCreator(sex));
  // },
  onSelectSex: bindActionCreators(SexActionCreator, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Count);
