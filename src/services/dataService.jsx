

const temp_data = [
    {
        title: "Pork",
        content: "recipe",
        creator: "Eric and Neil",
        id:"1"


    },
    {
        title: "Beef",
        content: "Recipe",
        creator: "eric",
        id:"2"

    }


];

class DataService {

        getPosts() {

            //TODO: call the API here


            //in the meantime return local data
            return temp_data;
        }

}

export default new DataService();