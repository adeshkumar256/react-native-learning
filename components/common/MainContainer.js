import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native'
import { useLoader } from '../../hooks/LoaderProvider'
import Loader from './Loader'

export default function MainContainer({ children }) {
  const { isGlobalLoading } = useLoader();
  console.log(isGlobalLoading,"load")
  return (
    <SafeAreaView
      automaticallyAdjustKeyboardInsets={true}
      style={[styles.mainContainer]}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{
        flexGrow: 1
      }}>
        {isGlobalLoading ? <Loader /> : children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E6DFDA',
  }
})
