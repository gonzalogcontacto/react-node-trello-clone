const baseURL = 'http://localhost:5000/api';

const API = {
  lists: {
    async getListsOfBoard () {
        const ApiResponse = await fetch(`${baseURL}/list`)
        const json = await ApiResponse.json();
        return json;
    },
    async getTasksOfList (id){
        const ApiResponse = await fetch(`${baseURL}/list/${id}/tasks`)
        const json = await ApiResponse.json();
        return json;
    }
  },
};

export default API;
