<template>
    <div class="h-screen">
        <div
            v-if="imgExist === 'true'"
            class="flex justify-center items-center flex-col"
        >
            <logo />
            <img :src="img.url" :alt="img.name" />
        </div>
        <div v-if="imgExist === 'false'">
            <NotFound />
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import Logo from '@/components/Logo';
import NotFound from '@/components/NotFound';
export default {
    name: 'Img',
    components: { Logo, NotFound },
    created() {
        Axios.get(`http://localhost:7000/images/${this.$route.params.id}`)
            .then(({ data }) => {
                this.img = { ...data };
                console.log(this.img.url);
                this.imgExist = 'true';
            })
            .catch(() => {
                this.imgExist = 'false';
            });
    },
    data() {
        return {
            imgExist: '',
            img: {}
        };
    }
};
</script>

<style scoped></style>
