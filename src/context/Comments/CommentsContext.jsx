import { data } from '/src/data.js';
import { createContext, useState} from 'react';

export const CommentsContext = createContext({});

const CommentsContextProvider = ({children}) => {

    const [comments,setComments] = useState(localStorage.getItem('commentsStorage')?JSON.parse(localStorage.getItem('commentsStorage')):data.comments);
    const [currentUser,setCurrentUser] = useState(localStorage.getItem('currentUserStorage')?JSON.parse(localStorage.getItem('currentUserStorage')):data.currentUser);
    const [userList,setUserList] = useState(localStorage.getItem('userListStorage')?JSON.parse(localStorage.getItem('userListStorage')):data.userList);
    const [usersRecord,setUsersRecord] = useState(localStorage.getItem('usersRecordStorage')?JSON.parse(localStorage.getItem('usersRecordStorage')):data.userList);
    const [userToDelete,setUserToDelete] = useState('');
    const [newUserImage,setNewUserImage] = useState('');
    const [idCounter,setIdCounter] = useState(localStorage.getItem('idCounterStorage')?JSON.parse(localStorage.getItem('idCounterStorage')):5);
    const [commentToDelete,setCommentToDelete] = useState(0);
    const [resetVotes,setResetVotes] = useState(false);


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
                                            setNewUserImage,
                                            idCounter,
                                            setIdCounter,
                                            commentToDelete,
                                            setCommentToDelete,
                                            resetVotes,
                                            setResetVotes
                                            }}>
        {children}
    </CommentsContext.Provider>
}

export {CommentsContextProvider};