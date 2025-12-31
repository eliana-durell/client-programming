// const proxyBase = "https://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";
const proxyBase = "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";



// endpoint to be something like "about/" or "degrees/"
async function getData(endpoint) {
    const result = await fetch(`${proxyBase}${endpoint}`);
    return await result.json();
} 
export default getData;