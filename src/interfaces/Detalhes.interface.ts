import { ImageSourcePropType } from 'react-native'

export interface DetalhesProps {
  id: Number
  foto: ImageSourcePropType
  titulo: string
  descricao: string
  nome_user: string
}