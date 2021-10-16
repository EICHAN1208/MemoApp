import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';
import KeyboardSafeView from '../components/KeyBoardSafeView';
import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
        <CircleButton
          name="check"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
