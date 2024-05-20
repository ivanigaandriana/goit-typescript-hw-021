import axios, { AxiosResponse } from 'axios';


export interface IUnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  description: string;
  alt_description: string;
  likes: number;
}


type UnsplashResponse = AxiosResponse<{ results: IUnsplashImage[] }>;


export const requestImagesByQuery = async (
  query = '',
  page = 1
): Promise<IUnsplashImage[]> => {
  try {
    const response: UnsplashResponse = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=CtlI5aXGdwrzK3d2XFGXEZis-d7j8Zn2-13GWom109o`
    );
    const data: IUnsplashImage[] = response.data.results;
    return data;
  } catch (error) {
   
    console.error('Error fetching images:', error);
    throw error; 
  }
};