import axios from "axios";


const api = axios.create({
  baseURL: "https://pcsuyiirlhvunumtfpwf.supabase.co/rest/v1/",
  headers: {
    apikey: "sb_publishable_z-qoLhFo9Pg1VW8CHG4lsQ_78fHb6wF",
  },
});

export default api;
