import { backendUrl, apiToken } from './backendUrl';

export const getSingletonData = async (singletonName) => {
    
    const data = await fetch(backendUrl + '/singletons/get/' + singletonName + apiToken)
    .then(response => response.json())
    .then(response => { return response });

    return data;

}

export const getCollectionData = async (collectionName) => {
    
    const data = await fetch(backendUrl + '/collections/get/' + collectionName + apiToken)
    .then(response => response.json())
    .then(response => { return response });

    return data;

}

export const getSlugsOfCollectionEntries = async (collectionName) => {

    const data = await fetch(backendUrl + '/collections/get/' + collectionName + apiToken)
    .then(response => response.json())
    .then(response => { return response });

    return data.entries.map(({ slug }) => {
        return {
            params: {
                slug: slug
            }
        }
    });

}