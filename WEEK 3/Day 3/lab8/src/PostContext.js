import React, {createContext} from 'react'
export const PostContext = createContext();

export const PostProvider = ({children}) =>{
    const [selectedPostId, setSelectedPostId] = React.useState(null);
    const value = {selectedPostId, selectedPostId};
return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}
 
