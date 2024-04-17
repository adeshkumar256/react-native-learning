import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import CustomButton from '../Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userRegisterSchema, userRegisterDefaultValues } from '../schema/userSchema';
import { Link } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const logo = require('../../assets/adaptive-icon.png')

function Register() {
  const windowWidth = useWindowDimensions().width;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
    defaultValues: { ...userRegisterDefaultValues },
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
        }}>Register</Text>
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>First Name</Text>
              <TextInput style={[styles.input, { borderWidth: 1 }]} value={value} onChangeText={onChange}
                placeholder="First Name"
                autoCorrect={false}
                autoCapitalize='none' />
              {errors.firstName && <Text style={styles.errorText}>{errors.firstName.message}</Text>}
            </View>
          )}
          name="firstName"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Last Name</Text>
              <TextInput style={[styles.input, { borderWidth: 1 }]} value={value} onChangeText={onChange}
                placeholder="Last Name" />
              {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}
            </View>
          )}
          name="lastName"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Email</Text>
              <TextInput style={[styles.input, { borderWidth: 1 }]} value={value} onChangeText={onChange}
                placeholder="Email" />

              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Phone Number</Text>
              <TextInput
                style={[styles.input, { borderWidth: 1 }]}
                value={value}
                onChangeText={onChange}
                placeholder="Phone Number"
                keyboardType="numeric" />

              {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>}
            </View>
          )}
          name="phoneNumber"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (

            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Password</Text>
              <View style={styles.passwordHiddenContainer}>
                <TextInput style={[styles.input, { borderWidth: 1, flex: 1, paddingRight: 20 }]} value={value} onChangeText={onChange}
                  placeholder="Password" secureTextEntry={!showPassword} />
                <MaterialCommunityIcons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#aaa"
                  onPress={toggleShowPassword}
                  style={{ marginLeft: -30 }}
                />
              </View>
              {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (

            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Re-enter password</Text>
              <View style={styles.passwordHiddenContainer}>
                <TextInput style={[styles.input, { borderWidth: 1, flex: 1, paddingRight: 20 }]} value={value} onChangeText={onChange}
                  placeholder="Re-enter password" secureTextEntry={!showConfirmPassword} />
                <MaterialCommunityIcons
                  name={showConfirmPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#aaa"
                  onPress={toggleShowConfirmPassword}
                  style={{ marginLeft: -30 }}
                />
              </View>
              {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
            </View>
          )}
          name="confirmPassword"
        />
      </View>

      <View style={styles.inputContainer}>
        <CustomButton title='Register' style={{ backgroundColor: "#282B6E" }} handleSubmit={handleSubmit(onPressSend)} />
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 20 }}>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>OR</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>
            Already a member?
            <Link to={{ screen: 'Login' }} style={{ ...styles.alreadyMember }}>
              <Text>{" "}Login</Text>
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
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    borderWidth: 1
  },
  errorText: {
    color: 'red'
  },
  passwordHiddenContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5
  },
  alreadyMember: {
    textAlign: 'right',
    color: 'blue',
  }
})
export default Register
