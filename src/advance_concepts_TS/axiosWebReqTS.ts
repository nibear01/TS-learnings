import axios, { type AxiosResponse } from "axios";

const url = "https://jsonplaceholder.typicode.com/users/1";

interface Todo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(url);
    const data: Todo = response.data;
    console.log(data.name); // Accessing the 'name' property of the Todo object
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error: ", error.message);
      if (error.response) {
        console.log("Response data: ", error.response.status);
      }
    }
  }
};

console.log(fetchData()); // a promise is returned, so we can use .then() to handle the resolved value
