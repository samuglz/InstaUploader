<template>
    <div class="">
        <logo />
        <div
            class="gallery overflow-y-auto w-full flex items-center gap-5 flex justify-center items-center"
        >
            <div v-for="file in files" :key="file.name" class="w-full py-2">
                <img
                    :src="getUrl(file)"
                    :alt="file.name"
                    :style="{
                        width: '300px',
                        'box-shadow': '0 0 10px 2px rgba(0,0,0,0.1)'
                    }"
                    class="rounded-md cursor-pointer"
                    @click="goToImage(file.name)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import Logo from '@/components/Logo';
export default {
    name: 'Gallery',
    components: { Logo },
    created() {
        Axios.get(`${process.env.VUE_APP_API}`)
            .then(res => {
                this.files = res.data;
            })
            .catch(err => {
                console.log(err);
            });
    },
    data() {
        return {
            files: []
        };
    },
    methods: {
        getUrl(value) {
            return `${process.env.VUE_APP_API}${value.url}`;
        },
        goToImage(value) {
            // this.$router.push(`/image/${value}`);
            this.$router.push({ name: 'Img', params: { id: value } });
        }
    }
};
</script>

<style scoped>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
}
</style>
