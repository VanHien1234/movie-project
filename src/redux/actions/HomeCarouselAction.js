//actions
import   { fecthAllMovieBanner }  from 'Api/MovieApi';
import { SET_BANNER } from 'redux/types/CarouselType';

export const getCarouselAct = () =>{

    return async (dispatch) =>{
        try {
            const result = await fecthAllMovieBanner()
            console.log('result1',result.data.results)
            dispatch({
                type : SET_BANNER,
                arrImg : result.data.results

            })


        }catch(errors){
            console.log('error',errors)
        }
    }
    
}