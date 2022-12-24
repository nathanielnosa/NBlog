import {useState, useEffect} from 'react';
const useFetch = (url)=>{
    const [data,setData]=useState(null);
    const[isLoading, setLoader] =useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        const abortControl = new AbortController();
        
        setTimeout(()=>{
            fetch(url, { signal: abortControl.signal })
            .then(res=> { 
                if(!res.ok){
                    throw Error('Data could not be fetched');
                }
                return res.json()
            })
            .then(data=>{
                setData(data);
                setLoader(false);
                setError(null)
            })
            .catch(err=>{
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setLoader(false);    
                }
                
            })
        },1000)

    // abort controller
    return ()=> abortControl.abort();

    },[url]);
    return{
         data, isLoading, error
    }
}

export default useFetch;
