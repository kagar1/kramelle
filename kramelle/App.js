import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./component/Search.js";

export default function App() {
  return (
    <Search />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
  },
});
