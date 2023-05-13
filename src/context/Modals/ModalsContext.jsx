import { createContext, useState } from 'react';

export const ModalsContext = createContext({});

const ModalsContextProvider = ({children}) => {

    const [activeModal,setActiveModal] = useState(false);
    const [addUserModal,setAddUserModal] = useState(false);
    const [deleteUserModal,setDeleteUserModal] = useState(false);
    const [deleteCommentModal,setDeleteCommentModal] = useState(false);
    const [resetModal,setResetModal] = useState(false);


    return <ModalsContext.Provider value={{activeModal,
                                            setActiveModal,
                                            addUserModal,
                                            setAddUserModal,
                                            deleteUserModal,
                                            setDeleteUserModal,
                                            deleteCommentModal,
                                            setDeleteCommentModal,
                                            resetModal,
                                            setResetModal
                                            }}>
        {children}
    </ModalsContext.Provider>
}

export {ModalsContextProvider};