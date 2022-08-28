import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import tw from 'twrnc';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`p-5`}></View>
      <Text>Lets Build UBER!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
