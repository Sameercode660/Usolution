import { Client, Databases } from "appwrite";

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('652e461ba4ff12dde98c')

const databases = new Databases(client)

export default databases