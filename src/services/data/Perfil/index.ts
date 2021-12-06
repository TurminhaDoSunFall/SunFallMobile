import { IPerfil } from "../../../interfaces/Perfil.interface";
import api from "../../api";

class PerfilData {
  index() {
    return api.get<IPerfil>('/perfil')
  }
  update(id: number, data: string) {
    console.log(id, data)
    return api.put<IPerfil>(`/perfil/${id}`, { data: data })
  }
}

export default new PerfilData();