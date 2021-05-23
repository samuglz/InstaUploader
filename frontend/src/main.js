import Vue from 'vue';
import App from './App.vue';
import './assets/style/tailwind.css';
import router from './router';
// import { createProvider } from './vue-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    link: createUploadLink({
        uri: 'http://localhost:4000'
    }),
    cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app');
