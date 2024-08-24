import NombreInterface, { InterfaceApp } from "./interface";

export class NombreRepository implements NombreInterface {
  async getNombre(): Promise<InterfaceApp> {
    // Simulación de obtener un nombre asíncronamente
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ nombre: "Ejemplo" });
      }, 1000);
    });
  }
}