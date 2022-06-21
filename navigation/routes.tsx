// If possible, name all routes using CamelCase.
// Easier on the eyes, easier to refactor

const ROUTES = Object.freeze({
  WELCOME: "Welcome",

  // auth
  LOGIN: "Login",
  REGISTER: "Register",

  // shared
  SPLASH: "Splash",
  ABOUT: "About",
  INVITE_FRIENDS: "InviteFriends",
  FAQ: "Faq",
  CONTACT_MESSAGES: "ContactMessages",
  CONTACT_US: "ContactUs",

  // account
  MENU: "Menu",

  // home
  HOME: "Home",

  // USER
  USER_HOME: "UserHome",
  USER_TAB_ONE: "UserTabOne",
  USER_TAB_TWO: "UserTabTwo",
  USER_TAB_THREE: "UserTabThree",
  USER_TAB_FOUR: "UserTabFour",
  USER_IMAGE_DETAILS: "UserImageDetails",
  USER_PROFILE: "UserProfile",

  // admin
  ADMIN_HOME: "AdminHome",
  ADMIN_PROFILE: "AdminProfile",
});

export default ROUTES;
