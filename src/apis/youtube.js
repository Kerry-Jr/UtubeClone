import axios from 'axios'
import secret from './apiKey'

const KEY = secret

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY

  }
})
