
import axios from 'axios';


const getData = async () => {
  const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
  const response = await axios.get(url)
  console.log(response.data[0])
}

getData()
