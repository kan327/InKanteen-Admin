import type { TnewUser } from "~/types";
import { ID, Query } from "appwrite";
import { account, appwriteConfig, avatars, client, databases } from "./config";

const errorWarning = ({err , nameFunc} : {err: unknown, nameFunc: String}) => {
  const inf = "=========================|| The following error capture is detected, here is the error log ||========================="
  const done = "=========================|| LOG DONE ||========================="
  const res = `error when trying Function | ${nameFunc} | ERROR MESSAGE: | ${err} |`
  console.info(inf)
  console.warn(res)
  console.info(done)
  return res
}
// errorWarning({err: error, nameFunc:""})

const response = ({success , code, msg, data} : {success: Boolean, code: number, msg: unknown, data?: any}) => {
  return {
    success,
    code,
    msg,
  }
}
// return response({success: true, code: 200, msg: "", data: });
// return response({success: false, code: 401, msg: error})


export async function createUserAccount(user: TnewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name,
    )

    if(!newAccount) throw Error

    const avatarUrl = avatars.getInitials(user.name)

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      imageUrl: avatarUrl,
    })


    return response({success: true, code: 200, msg: "success register", data: newUser});
  } catch (error) {
    errorWarning({err: error, nameFunc:"createUserAccount"})
    return response({success: false, code: 401, msg: error})
  }
}

export async function saveUserToDB(user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL;
  role?: string;
}) {
  try {
    if(!user.role) user.role = 'admin';
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user,
    )

    return response({success: true, code: 200, msg: "success save user", data: newUser});
  } catch (error) {
    errorWarning({err: error, nameFunc:"saveUserToDB"})
    return response({success: false, code: 401, msg: error})
    // return error
  }
}

export  async function signInAccount(user: {email: string, password: string}) {
  try {
    const session = await account.createEmailSession(user.email, user.password)
    console.log(session);
    return response({success: true, code: 200, msg: "success login", data: session});
  } catch (error) {
    errorWarning({err: error, nameFunc:"signInAccount"})
    return response({success: false, code: 401, msg: error})
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get()

    if (!currentAccount) throw Error

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )

    if(!currentUser) throw Error

    return response({success: true, code: 200, msg: "sucess to get current user", data: currentUser.documents[0]});
  } catch (error) {
    errorWarning({err: error, nameFunc:"signInAccount"})
    return response({success: false, code: 401, msg: error})
  }
}
export async function clientSubs() {
  if (account.get !== null) {
    try {
      client.subscribe("documents", (res) => {
      return response({success: true, code: 200, msg: "sucess to clientsub", data: res});
    });
  } catch (error) {
    errorWarning({err: error, nameFunc:"clientSubs"})
    return response({success: false, code: 401, msg: error})
    }
  }
}