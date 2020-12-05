import axios from "axios";
const BASEURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3c49d63630980dac550d6ffd238fa4a3&format=json";


export default {
  getTopTracks: function() {
    return axios.get(BASEURL);
  }
};
