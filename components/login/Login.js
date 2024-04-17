import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import CustomButton from '../Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userLoginSchema, userLoginDefaultValues } from '../schema/userSchema';
import { Link } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../../services/loginService';
import { useAuth } from '../../hooks/AuthProvider';
const logo = require('../../assets/adaptive-icon.png')

function Login() {
  const dispatch = useDispatch()
  const { login } = useAuth()
  const windowWidth = useWindowDimensions().width;
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
    defaultValues: { ...userLoginDefaultValues },
  });

  const onPressSend = (formData) => {
    dispatch(LoginUser(formData, login))
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
        }}>LOGIN</Text>
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

      </View>
      <View style={styles.inputContainer}>
        <Link to={{ screen: 'ForgotPassword' }} style={styles.forgotPassword}>
          <Text>Forgot Password?</Text>
        </Link>
      </View>

      <View style={styles.inputContainer}>
        <CustomButton title='Log in' style={{ backgroundColor: "#282B6E" }} handleSubmit={handleSubmit(onPressSend)} />
      </View>
      <View style={{ ...styles.inputContainer, marginTop: 20 }}>
        <View>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>OR</Text>
        </View>
        <View>
          <Text style={{ textAlign: 'center' }}>
            Don't have an account yet?
            <Link to={{ screen: 'Register' }} style={{ ...styles.forgotPassword }}>
              <Text>{" "}Register now</Text>
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
    marginTop: 20,
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
  forgotPassword: {
    textAlign: 'right',
    color: 'blue',
  },
  passwordHiddenContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5
  },
})
export default Login
