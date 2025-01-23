enum AuthScreen {
  Login = 'Login',
  Register = 'Register',
}

enum MainScreen {
  Home = 'Home',
  Search = 'Search',
  Profile = 'Profile',
  Settings = 'Settings',
  ContentDetail = 'ContentDetail',
  Notifications = 'Notifications',
}

export const Screen = {
  ...AuthScreen,
  ...MainScreen,
};
