import { ImageSourcePropType } from 'react-native'

export interface DetalhesProps {
  id: Number
  foto: ImageSourcePropType
  titulo: String
  descricao: String
  nome_user: String
}