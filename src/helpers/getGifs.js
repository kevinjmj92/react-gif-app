


export const getGifs = async( category ) => {
      
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=WH7VN0eY7WBv64GDrc52GVubs9x0Btwv`;
    const resp = await fetch( url );
    const { data } = await resp.json();


    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}