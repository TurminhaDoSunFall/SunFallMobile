export interface PerfilProps {
  id: number
  name: string
  email: string
  uploads: number
  data: string
}

export interface IPerfil {
  status: string,
  message: string,
  data: {
    id: number,
    name: string,
    email: string,
    uploads: number
  }
}

export interface IInterfacePerfil {
  id: number
  name: string
  email: string
  data: string
  uploads: number
}