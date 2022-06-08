import axios from "axios";

const marvelDB= axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params:{
        ts:1,
        apikey:'79b5df04c3f413203d39dfa541a02bec',
        hash:'56363f66d0daa6b2a4d97991a14beb26',
    }
})


export default marvelDB;