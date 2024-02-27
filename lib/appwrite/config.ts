import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
  projectId: "65dadc79abebe27c8867",
  url: "https://cloud.appwrite.io/v1",
  databaseId: "65db04ace56d26063bce",
  userCollectionId: "65db052399396e6a00e6",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId)
  .setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<YOUR_PROJECT_ID>'); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from 'appwrite';
