//reducers

import { SET_BANNER } from "redux/types/CarouselType"


const stateDefault = {
    arrImg: [{

    }]
}

export const CarouselReducer = (state = stateDefault, action) => {
    let clonedState = { ...state }
    switch (action.type) {
        case SET_BANNER :{
            clonedState.arrImg= action.arrImg
            return clonedState
        }
        default: return clonedState
    }
}