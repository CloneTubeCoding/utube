//여기서 URL을 생성하고 ~~Router.js 에서 가져다 쓸거임

//Global 전역
const HOME = "/"; //홈
const JOIN = "/join"; //회원가입
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//About Users

const USERS = "/users";
const USER_DETAIL = "/:id"; //EX /users/1921
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const MY_PROFILE = "/myProfile";

//About videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; //:id 같은 경우 Express가 변수라고 알아챔
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//Facebook

const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

//API
//이 URL은 어떤것도 렌더링할 수 없음
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";
const DELTE_COMMENT = "/:id/deleteComment";
const UPDATE_COMMENT = "/:id/updateComment";

const routes = {
  home: HOME,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: id => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: id => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  myProfile: MY_PROFILE,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  deleteComment: DELTE_COMMENT,
  updateComment: UPDATE_COMMENT
};

export default routes;
