import axios from 'axios'
const instance=axios.create({
    baseURL:'https://heartattackriskprediction-default-rtdb.firebaseio.com/'
})
export default instance