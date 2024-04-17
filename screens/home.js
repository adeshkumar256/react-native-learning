import { Text, TouchableOpacity, View } from 'react-native'
import MainContainer from '../components/common/MainContainer'
import { useAuth } from '../hooks/AuthProvider'
import { userSelector } from '../redux/slice/userSlice'
import { useSelector } from 'react-redux'
import Dashboard from '../components/home/Dashboard'

export default function HomeScreen() {
  const { logout } = useAuth()
  const userData = useSelector(userSelector);
  console.log(userData)
  return (
    <MainContainer>
      <Dashboard />
      {/* <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to home</Text>
        <TouchableOpacity onPress={() => logout()}>
          <Text>
            Logout
          </Text>
        </TouchableOpacity>
      </View> */}
    </MainContainer>
  )
}
