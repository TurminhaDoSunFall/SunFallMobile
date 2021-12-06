import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from 'react-native'
import { PerfilProps } from "../interfaces/Perfil.interface"



//Cadastrar
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
  Escolha: undefined 

}
type CFCScreenNavigationProp = StackNavigationProp<CFCStackParamList>
export type CFCTypes = {
  navigation: CFCScreenNavigationProp
}


//Detalhes
export type DetalhesStackParamList = {
  Galeria: undefined
  Gaveta: undefined
  Detalhes: {
    id: Number
    foto: ImageSourcePropType
    titulo: string
    descricao: string
    nome_user: string 
}
}
type DetalhesScreenNavigationProp = StackNavigationProp<DetalhesStackParamList>
export type DetalhesTypes = {
  navigation: DetalhesScreenNavigationProp
}

//EditarStack
export type EditarStackParamList = {
  Gaveta: undefined
  MinhaGaleria: undefined
  Editar: undefined
}
type EditarScreenNavigationProp = StackNavigationProp<EditarStackParamList>
export type EditarTypes = {
  navigation: EditarScreenNavigationProp
}



//CadastroFotoStack
export type CadastroFotoStackParamList = {
  Gaveta: undefined
  MinhaGaleria: undefined
  Camera: undefined
}
type CadastroFotoScreenNavigationProp = StackNavigationProp<CadastroFotoStackParamList>
export type CadastroFotoTypes = {
  navigation: CadastroFotoScreenNavigationProp
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



//Galeria
export type GaleriaStackParamList = {
 Galeria: undefined
 Gaveta: undefined
 Detalhes: {
     id: Number
     foto: ImageSourcePropType
     titulo: string
     descricao: string
     nome_user: string 
 }
  
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


//MinhaGaleria
export type MinhaGaleriaStackParamList = {
  Gaveta: undefined
  Editar: undefined
}
type MinhaGaleriaScreenNavigationProp = StackNavigationProp<MinhaGaleriaStackParamList>
export type MinhaGaleriaTypes = {
  navigation: MinhaGaleriaScreenNavigationProp
}


//Perfil
export type PerfilStackParamList = {
  Gaveta: undefined
  Login: undefined
  Perfil: PerfilProps
}
type PerfilScreenNavigationProp = StackNavigationProp<PerfilStackParamList>
export type PerfilTypes = {
  navigation: PerfilScreenNavigationProp
}
