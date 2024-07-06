import HomePage from "./components/HomePage.vue";
import RecentMatchDetails from "./components/RecentMatchDetails.vue";

export default [
    {path: '/', component: HomePage},
    {path: '/:id', component: RecentMatchDetails}
]