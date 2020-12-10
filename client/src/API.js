import axios from "axios";

export default {
  getTopTracks: function () {
    return axios.get(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3c49d63630980dac550d6ffd238fa4a3&format=json"
    );
  },

  getTopArtists: function () {
    return axios.get(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=3c49d63630980dac550d6ffd238fa4a3&format=json"
    );
  },
  getTopAlbums: function () {
    return axios.get(
      "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=3c49d63630980dac550d6ffd238fa4a3&format=json"
    );
  },
};
