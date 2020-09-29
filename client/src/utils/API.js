import axios from "axios";

export default {
    sendEmail: function(emailInfo) {
        return axios.post("/api/email", emailInfo);
      }
}