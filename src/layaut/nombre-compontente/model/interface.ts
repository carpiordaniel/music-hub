export interface InterfaceApp {
  nombre: string
}


export default interface NombreInterface {
  getNombre(): Promise<InterfaceApp>;
}