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

// Perfil
export type PerfilStackParamList = {
  Gaveta: undefined
  Login: undefined
}
type PerfilScreenNavigationProp = StackNavigationProp<PerfilStackParamList>
export type PerfilTypes = {
  navigation: PerfilScreenNavigationProp
}

// Confug Feedbak e Créditos 
export type CFCStackParamList = {
  Gaveta: undefined
}
type CFCScreenNavigationProp = StackNavigationProp<CFCStackParamList>
export type CFCTypes = {
  navigation: CFCScreenNavigationProp
}

// Minha Galeria
export type MinhaGaleriaStackParamList = {
  Gaveta: undefined
  Editar: undefined
  CadastroFoto: undefined
}
type MinhaGaleriaScreenNavigationProp = StackNavigationProp<MinhaGaleriaStackParamList>
export type MinhaGaleriaTypes = {
  navigation: MinhaGaleriaScreenNavigationProp
}

// Feedback
export type FeedbackStackParamList = {
  Gaveta: undefined
  Feedback: undefined
}
type FeedbackScreenNavigationProp = StackNavigationProp<FeedbackStackParamList>
export type FeedbackTypes = {
  navigation: FeedbackScreenNavigationProp
}