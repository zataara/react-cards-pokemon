import React, { useState } from 'react';


const useAxios = (url) => {
    const[responses, setResponses] = useState();

    async function addResponseData(url) {
        const res = await axios.get(url)
        setResponses(data => [...data, ])
    }
}

export default useAxios;