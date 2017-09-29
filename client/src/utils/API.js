import axios from "axios";

export default {
  // Gets the User with the given skill
  getUserSkill: function(skill) {
    return axios.get("/api/users/" + skill);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  //Get the email
  signIn: function(userEmail) {
    return axios.get("/api/users/signIn/" + userEmail);
  }
};
