
import Axios from 'axios';

export class baseService {

    get = (url) => {
        return Axios({
            url: `${BASE_URL}/${url}`,
            method: 'GET',
        })
    }


}
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMGDOMAIN1 = 'https://image.tmdb.org/t/p/original'
export const IMGDOMAIN2 = 'https://image.tmdb.org/t/p/w500'
export const keyAPI = '6d1eea6bffdd04fc4ce2440312cc1711'