import axios from 'axios'

const apiClient = axios.create ({
    baseURL: 'https://my-json-server.typicode.com/PakphoomKaewthip/compo-Lab02' ,
    withCredentials: false ,
    headers: {
        Accept: 'application/json' ,
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}