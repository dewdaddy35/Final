import axios from "axios";

class DataService {
  serverURL = "http://127.0.0.1:8000";

  async getPosts() {
    //TODO: call the API here
    let response = await axios.get(this.serverURL + "/api/recipe/");
    return response.data;

    //in the meantime return local data
    //return temp_data;
  }

  async getRecipe(id) {
    let response = await axios.get(this.serverURL + "/api/recipe/" + id + "/");
    return response.data;
  }

  async login(username, password) {
    try {
      let response = await axios.post(this.serverURL + "/api/auth/token/", {
        username,
        password,
      });
      return response.data;
    } catch {
      return false;
    }
  }

  async saveLike(recipeId) {
    let response = await axios.post(
      this.serverURL + `/api/recipe/${recipeId}/like/`,
      null,
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      }
    );
    return response;
  }
}

export default new DataService();
