import { useState, useEffect,useCallback } from "react"
async function sendHttpRequest(ur, config){
const response = await fetch(ur, config)



const resData = await response.json()


if(!response.ok){
    throw new Error(resData.message || "Request failed")
}

return resData
}

export default function useHttp(url, config, intialData){
    const [data, setData] = useState(intialData)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
   const sendRequest=useCallback( async function sendRequest(){
        setIsLoading(true)
        try{

     const resData = await sendHttpRequest(url, config)
     setData(resData)
        }
   catch(err){
    setError(err.message || "Something went wrong")
     
    }
    setIsLoading(false)
    
    }, [url, config])
    useEffect(()=>{
        if(config && (config.method !== "GET" || !config.method) || !config){
            sendRequest()
        }
    
    }, [sendRequest, config])
    return{
        sendRequest,
        data,
        error,
        isLoading

    }
}
