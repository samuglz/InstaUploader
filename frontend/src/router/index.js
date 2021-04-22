import Vue from 'vue';
import VueRouter from 'vue-router';
import Upload from '../views/Upload';
import Gallery from '../views/Gallery';

Vue.use(VueRouter);

const routes = [
    {
        path: '/upload',
        name: 'Upload',
        component: Upload
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
