import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomButton from '../Button'
import TaskList from './TaskList'
const logo = require('../../assets/adaptive-icon.png')

export default function Dashboard() {
  const [taskName, setTaskName] = useState("")
  return (
    <View style={styles.container}>

      <View style={{ marginTop: 50 }}>
        <View style={{ ...styles.inputContainer, alignItems: 'center' }}>
          <Image source={logo} style={{ width: 100, height: 100 }} />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.inputText}>Enter your task</Text>
          <TextInput
            style={[styles.input, { borderWidth: 1 }]}
            value={taskName} multiline={true}
            onChangeText={setTaskName}
            maxLength={150}
            numberOfLines={4}
            placeholder="Enter task name" />
          <CustomButton title='Add' style={{ marginTop: 10, backgroundColor: 'red' }} disabled={!taskName} />
        </View>
      </View>
      <View>
        <TaskList />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    flexGrow: 1,
    paddingHorizontal: 12,
    // justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1
  },
  inputText: {
    fontWeight: "bold",
    marginBottom: 8,
  }
})