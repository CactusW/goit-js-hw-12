const URL = "https://pixabay.com/api/";
const API_KEY = "45561699-87bf7fcf520d3d41b811bd2a3";



export function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,  
    });

   
    return fetch(`${URL}?${params.toString()}`)    
    .then(response => {                          
        if (!response.ok) {                        
            throw new Error(response.statusText);      
        }
        return response.json();                 
    })

.catch(error => {
    console.error("Image Search Error:", error);
    throw error;
});
}