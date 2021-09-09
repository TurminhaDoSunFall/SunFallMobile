import { StackNavigationProp } from "@react-navigation/stack"




export type CadastrarStackParamList = {
  Escolha: undefined
  Gaveta: undefined
  Login: undefined
}
type CadastrarScreenNavigationProp = StackNavigationProp<CadastrarStackParamList>
export type CadastrarTypes = {
  navigation: CadastrarScreenNavigationProp
}




//creditos & config 
export type CFCStackParamList = {
  Gaveta: undefined
}
type CFCScreenNavigationProp = StackNavigationProp<CFCStackParamList>
export type CFCTypes = {
  navigation: CFCScreenNavigationProp
}



export type DetalhesStackParamList = {
  Galeria: undefined
  Gaveta: undefined
}
type DetalhesScreenNavigationProp = StackNavigationProp<DetalhesStackParamList>
export type DetalhesTypes = {
  navigation: DetalhesScreenNavigationProp
}



//EditareCadastroFotoStack
export type EditareCadastroFotoStackParamList = {
  Gaveta: undefined
  MinhaGaleria: undefined
}
type EditareCadastroFotoScreenNavigationProp = StackNavigationProp<EditareCadastroFotoStackParamList>
export type EditareCadastroFotoTypes = {
  navigation: EditareCadastroFotoScreenNavigationProp
}



//FeedbackStack
export type FeedbackStackParamList = {
  Gaveta: undefined
  Feedback: undefined
}

type FeedbackScreenNavigationProp = StackNavigationProp<FeedbackStackParamList>
export type FeedbackTypes = {
  navigation: FeedbackScreenNavigationProp
}




export type GaleriaStackParamList = {
  Gaveta: undefined
  Detalhes: undefined
}
type GaleriaScreenNavigationProp = StackNavigationProp<GaleriaStackParamList>
export type GaleriaTypes = {
  navigation: GaleriaScreenNavigationProp
}



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



export type MinhaGaleriaStackParamList = {
  Gaveta: undefined
}
type MinhaGaleriaScreenNavigationProp = StackNavigationProp<MinhaGaleriaStackParamList>
export type MinhaGaleriaTypes = {
  navigation: MinhaGaleriaScreenNavigationProp
}



export type PerfilStackParamList = {
  Gaveta: undefined
  Login: undefined
}
type PerfilScreenNavigationProp = StackNavigationProp<PerfilStackParamList>
export type PerfilTypes = {
  navigation: PerfilScreenNavigationProp
}
