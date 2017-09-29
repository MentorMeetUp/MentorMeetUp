import axios from "axios";

export default {
   //Get the email
  signIn: function(userEmail) {
    return axios.get("/api/users/" + userEmail);
  }
