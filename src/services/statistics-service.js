import axios from "axios";

class StatisticsService {

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  getAll = () => {
    const pr = this.api.get("/api/data").then((response) => response.data);
    return pr;
  };
}

const statisticsService = new StatisticsService();
export default statisticsService;
