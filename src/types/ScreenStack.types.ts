import { StackNavigationProp } from "@react-navigation/stack"

// Login Stack
export type LoginStackParamList = {
  Escolha: undefined
  Login: undefined
  Cadastrar: undefined
  Perfil: undefined
  Gaveta: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

export type PerfilStackParamList = {
  Gaveta: undefined
  Login: undefined
}
type PerfilScreenNavigationProp = StackNavigationProp<PerfilStackParamList>
export type PerfilTypes = {
  navigation: PerfilScreenNavigationProp
}
export type CFCStackParamList = {
  Gaveta: undefined
}
type CFCScreenNavigationProp = StackNavigationProp<CFCStackParamList>
export type CFCTypes = {
  navigation: CFCScreenNavigationProp
}
