import { StackNavigationProp } from "@react-navigation/stack"

// Login Stack
export type LoginStackParamList = {
    Escolha: undefined
    Login: undefined
    Cadastrar: undefined
    DrawerStack: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}


