import Vue from 'vue';
import VueRouter from 'vue-router';
import Upload from '@/views/Upload';
import Gallery from '@/views/Gallery';
import NotFound from '@/components/NotFound';

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
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
