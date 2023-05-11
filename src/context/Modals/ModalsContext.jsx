import { createContext, useState } from 'react';

export const ModalsContext = createContext({});

const ModalsContextProvider = ({children}) => {

    const [activeModal,setActiveModal] = useState(false);
    const [addUserModal,setAddUserModal] = useState(false);
    const [deleteUserModal,setDeleteUserModal] = useState(false);


    return <ModalsContext.Provider value={{activeModal,setActiveModal,addUserModal,setAddUserModal,deleteUserModal,setDeleteUserModal}}>
        {children}
    </ModalsContext.Provider>
}

export {ModalsContextProvider};