import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from 'zustand/middleware/immer'  
import { Authorization } from "../../../infrastructure/interfaces/auth";
import FELOGIC_API from "../../../config/api/felogic";


 
interface UserState { 
  authorization:Authorization;
  isAuthenticated: boolean;
  login: (user:string, password:string) => void;
  logout: () => void; 
  validateToken: () => Promise<void>
}
const initStateUser:Authorization={
    id:0,
    userName:'',
    fullName:'',
    employeeId:0,
    profileId:0,
    positionId:0,
    userType:'',
    timeSession:0,
    accessToken:'',
    tokenType:'',
}


const userStore:StateCreator<UserState,[["zustand/devtools", never], ["zustand/immer", never]]>=(set,get)=>({  
    authorization:initStateUser, 
    isAuthenticated: false, 
    logout: () => { 
        //TODO hacer endpoint de LOGOUT
      set({ authorization: initStateUser,isAuthenticated: false });
    }, 
    login: async (user:string, password:string ) => { 
      try {
        const data = {code:user,password};  
        // const response=await FELOGIC_API.post('/auth/loginVehiculeApp',data)
        // console.log(response)
        set({ 
          authorization: {
                id:1,
                userName:'Alan Franco',
                fullName:'Silva Huarachi',
                employeeId:1,
                profileId:1,
                positionId:1,
                userType:'Conductor',
                timeSession:14545415,
                accessToken:'dsa5d41as4d6313s14d36a7413g3z7f3hgzsg31x',
                tokenType:'Bearer',
          },
          isAuthenticated:true 
        });
        
      } catch (error) {
        console.log(error)
      }
    }, 
    validateToken: async () => {  
      try {
        await FELOGIC_API('/auth/checkLoginVehicule',{
          headers:{
            'Authorization':`Bearer ${get().authorization.accessToken}` 
          }
        }); 
        
      } catch (error) {
        let message = 'Token invalido';  
        get().logout()
        
      }
    }, 
});


export const useAuthStore=create<UserState>()(
  devtools(
    persist(
      immer(
        userStore
      )
      ,{
         name:'user-store',
       }
    )
  )
);