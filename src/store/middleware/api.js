import axios from 'axios';
import env from "../../config/env";
import * as actions from "../api";

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    // console.log('api called');

    next(action);

    const { url, method, data, onSucces, onError } = action.payload;

    try {
        const response = await axios.request({
            baseURL: env.api,
            url,
            method,
            data,
        });

        dispatch(actions.apiCallSuccess(response.data));
        // dispatch({ type: onSucces, payload: response.data });
    } catch (error) {
        dispatch(actions.apiCallFailed(error));
        // dispatch({ type: onError, payload: error });
    }

}

export default api;