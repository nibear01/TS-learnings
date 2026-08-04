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
    const response = await fetch(url);
    const data: Todo = await response.json();
    console.log("data: ", data); // Logging the fetched data 
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

console.log(fetchData()); // a promise is returned, so we can use .then() to handle the resolved value
