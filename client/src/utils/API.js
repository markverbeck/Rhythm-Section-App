import axios from "axios";




export default {
	signUp: function(signUpData){
		return axios.post("/api/scores/user", signUpData);
	},
	loggedIn: function(logInData){
		return axios.get("api/scores/user/" + logInData);
	},
	logIn: function(logInData){
		return axios.put("api/scores/user/login", logInData);
	},
	logOut: function(logOutData){
		return axios.put("api/scores/user/logout", logOutData);
	},
	save: function(articleData){
		return axios.post("/api/scores", articleData);
	},
	searchScore: function(first, last){
		return axios.get("/api/scores/" + first + "/" + last);
	},
	delete: function(id){
		return axios.delete("/api/scores/" + id);
	},

}