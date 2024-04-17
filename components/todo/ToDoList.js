import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    a: 42,
    todos: state.todos,
    filter: state.visibilityFilter,
  }
}

function ToDoList({todos, filter}) {
  return (
    <View>

    </View>
  )
}

export default connect(mapStateToProps)(ToDoList);
