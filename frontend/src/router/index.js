import Vue from 'vue';
import VueRouter from 'vue-router';
import Upload from '@/views/Upload';
import Gallery from '@/views/Gallery';
import Img from '@/views/Img';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/upload',
        name: 'Upload',
        component: Upload
    },
    {
        path: '/images/:id',
        name: 'Img',
        component: Img
    },
    {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
