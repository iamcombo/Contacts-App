import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';

function Container({children, style}) {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={[styles.wrapper, style]}>
          {children}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  }
});

export default Container;
