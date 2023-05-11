import { data } from '/src/data.js';
import { createContext, useState } from 'react';

export const CommentsContext = createContext({});

const CommentsContextProvider = ({children}) => {

    const [comments,setComments] = useState(data.comments);
    const [currentUser,setCurrentUser] = useState(data.currentUser);
    const [userList,setUserList] = useState(data.userList);
    const [usersRecord,setUsersRecord] = useState(data.userList);
    const [userToDelete,setUserToDelete] = useState('');
    const [newUserImage,setNewUserImage] = useState('');


    return <CommentsContext.Provider value={{comments,
                                            setComments,
                                            currentUser,
                                            setCurrentUser,
                                            userList,
                                            setUserList,
                                            userToDelete,
                                            setUserToDelete,
                                            usersRecord,
                                            setUsersRecord,
                                            newUserImage,
                                            setNewUserImage
                                            }}>
        {children}
    </CommentsContext.Provider>
}

export {CommentsContextProvider};