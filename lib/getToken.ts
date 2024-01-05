import axios from "axios";
export default async function getToken(){
    const response = await axios.get("/api/token")
      return response.data
}