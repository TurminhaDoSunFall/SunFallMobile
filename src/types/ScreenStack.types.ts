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


export type CadastroFotoStackParamList = {
  MinhaGaleria: undefined
  Gaveta: undefined
}
type CadastroFotoScreenNavigationProp = StackNavigationProp<CadastroFotoStackParamList>
export type CadastroFotoTypes = {
  navigation: CadastroFotoScreenNavigationProp
}



//creditos feedback  config 
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





export type EditarStackParamList = {
  MinhaGaleria: undefined
  Gaveta: undefined
}
type EditarScreenNavigationProp = StackNavigationProp<EditarStackParamList>
export type EditarTypes = {

  navigation: EditarScreenNavigationProp
}




export type GaleriaStackParamList = {
  Gaveta: undefined
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