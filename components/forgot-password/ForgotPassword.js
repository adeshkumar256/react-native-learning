import React from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import CustomButton from '../Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema, forgotPasswordDefaultValues } from '../schema/userSchema';
import { Link } from '@react-navigation/native';
const logo = require('../../assets/adaptive-icon.png')

function ForgotPassword() {
  const windowWidth = useWindowDimensions().width;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: { ...forgotPasswordDefaultValues },
  });
  const onPressSend = (formData) => {
    Alert.alert("Confirmation", `Hello ${formData.email}, you are successfully logged in.`, [{
      text: "OK",
      onPress: console.log("Ok Pressed")
    }]);
  }

  return (
    <View style={styles.container}>
      <View style={{ ...styles.inputContainer, alignItems: 'center' }}>
        <Image source={logo} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={{
          fontSize: windowWidth > 500 ? 50 : 24,
          textAlign: "center"
        }}>Forgot Password</Text>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput style={[styles.input, { borderWidth: 1 }]} value={value} onChangeText={onChange}
                placeholder="Enter your registered email" />
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>
          )}
          name="email"
        />

      </View>

      <View style={styles.inputContainer}>
        <CustomButton title='Submit' style={{ backgroundColor: "#282B6E" }} handleSubmit={handleSubmit(onPressSend)} />
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 20 }}>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>OR</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>
            Click here to
            <Link to={{ screen: 'Login' }} style={{ ...styles.forgotPassword }}>
              <Text>{" "}login</Text>
            </Link>
          </Text>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 10,
  },
  inputText: {
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1
  },
  errorText: {
    color: 'red'
  },
  forgotPassword: {
    textAlign: 'right',
    color: 'blue',
  },
  signUpText: {

  }
})
export default ForgotPassword
