import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query"
import type { TnewUser } from "~/types"
import { createUserAccount, getCurrentUser, signInAccount } from "../appwrite/api"
import { QUERY_KEYS } from "./querykeys"

export const useUserContext = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: getCurrentUser
  })
}


// Access QueryClient instance
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: TnewUser) => createUserAccount(user)
  })
}

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: {
      email: string; 
      password: string; 
    }) => signInAccount(user),
  })
}
