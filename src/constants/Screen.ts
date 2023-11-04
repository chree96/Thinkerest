enum AuthScreen {
  Login = 'Login',
}

enum MainScreen {
  Home = 'Home',
  Search = 'Search',
  Profile = 'Profile',
  Settings = 'Settings',
  ContentDetail = 'ContentDetail',
}

export const Screen = {
  ...AuthScreen,
  ...MainScreen,
};
