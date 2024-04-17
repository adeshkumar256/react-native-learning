import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CustomButton({ title = "Submit", handleSubmit, style, ...rest }) {
  return (
    <TouchableOpacity style={[btnStyles.btnStyle, style]} onPress={handleSubmit} {...rest} >
      <Text style={btnStyles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

const btnStyles = StyleSheet.create({
  btnStyle: {
    height: 50,
    fontSize: 16,
    backgroundColor: "blue",
    justifyContent: "center",
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  }
})