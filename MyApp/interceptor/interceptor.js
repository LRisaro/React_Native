import axios from 'axios'

export const addInterceptor = () =>{
    //Request salientes
    axios.interceptors.request.use(
        request => requestHandler(request)
    )

    const requestHandler = (request) => {
        console.log("request interceptada", request)
        return request
    }

    //Response entrante
    axios.interceptors.response.use(
        response => responseHandler(response),
        error => errorResponseHandler(error)
    )

    const responseHandler = (response) => {
        console.log("Response interceptado", response)
        return response
    }

    const errorResponseHandler = (error) => {
        console.log("Error response interceptado", error)
        return error
    }
}