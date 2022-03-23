import axios from "@/axios";

class MyPageService {
  async getMyPageMenus() {
    try {
      const res = await axios.get("my-page/menus");
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new MyPageService();
