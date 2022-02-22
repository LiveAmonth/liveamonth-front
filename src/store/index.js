import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  state() {
    return {
      logo: require("@/assets/img/logo.png"),
      footerLogo: require("@/assets/img/logo_footer.png"),
      loginBackground: require("@/assets/img/login_background.jpg"),
      defaultProfile: require("@/assets/img/default.jpg"),
      reviewList: [
        {
          title: "1번 게시글 제목",
          previewContent: "미리보기 내용 1",
          cardInfo: {
            imageUrl: require("@/assets/img/default.jpg"),
            viewCount: 500,
            likeCount: 200,
            nickname: "홍길동",
            gender: "M",
            age: 29,
            email: "kxuxeon@gmail.com",
          },
        },
        {
          title: "2번 게시글 제목",
          previewContent: "미리보기 내용 2",
          cardInfo: {
            imageUrl: require("@/assets/img/default.jpg"),
            viewCount: 400,
            likeCount: 150,
            nickname: "김영희",
            gender: "F",
            age: 24,
            email: "young@gmail.com",
          },
        },
        {
          title: "3번 게시글 제목",
          previewContent: "미리보기 내용 3",
          cardInfo: {
            imageUrl: require("@/assets/img/default.jpg"),
            viewCount: 200,
            likeCount: 100,
            nickname: "김철수",
            gender: "M",
            age: 12,
            email: "chulsoo@gmail.com",
          },
        },
      ],
    };
  },
  modules: {
    auth,
  },
});

export default store;
