import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/auth/useAuthStore";
export interface FormUserProps {
    username:string
    password:string
}

export const useAuth=()=>{
    const navigator = useNavigation<NavigationProp< RootStackParams>>();

    const [formUser,setFormUser]=useState<FormUserProps>({username:'', password:''})
    const login =useAuthStore(state=>state.login)
    const isAuthenticated =useAuthStore(state=>state.isAuthenticated)

    const handleSubmitLogin=( )=>{
        console.log(formUser.username,formUser.password) 
        login(formUser.username,formUser.password) 
    }

    useEffect(() => {
        if (isAuthenticated) {
          navigator.navigate('DrawerNavigation');
        }
      }, [isAuthenticated, navigator]);

    return {
        formUser,
        setFormUser,
        handleSubmitLogin
    }
}