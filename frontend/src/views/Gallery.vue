<template>
    <div class="">
        <logo />
        <div
            class="gallery overflow-y-auto w-full flex justify-center items-center gap-3"
        >
            <div v-for="file in files" :key="file.name" class="w-full">
                <img
                    :src="getUrl(file)"
                    :alt="file.name"
                    :style="{
                        width: '300px',
                        'box-shadow': '0 0 0px 2px rgba(0,0,0,0.1)'
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
        Axios.get('http://localhost:7000/images')
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
            return `http://localhost:7000${value.url}`;
        },
        goToImage(value) {
            this.$router.push(`/image/${value}`);
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
