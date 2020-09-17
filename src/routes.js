import Home from './components/Home.vue';
import AddEvent from './components/AddEvent.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/add', name: 'AddEvent', component: AddEvent },
];

export default routes;