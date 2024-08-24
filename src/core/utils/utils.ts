import { MusicaPedida } from "../../layaut/cola-musicas-pedidas/model/interface";


export const fetchData = async (url: string): Promise<MusicaPedida[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error en fetchData:', error);
    throw error;
  }
};