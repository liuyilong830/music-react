import Discover from "../views/discover/Discover";
import My from "../views/my/My";
import Friends from "../views/friends/Friends";
import Download from "../views/download/Download";

const routes = [
  { path: '/', exact: true, component: Discover },
  { path: '/my', component: My },
  { path: '/friends', component: Friends },
  { path: '/Download', component: Download }
]

export default routes;