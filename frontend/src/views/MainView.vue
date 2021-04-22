<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <ImageUploadForm
            @uploadFile="uploadFile"
            v-if="componentToLoad === 'uploadForm'"
        />
        <loading v-if="componentToLoad === 'loading'" />
        <successfull-panel
            :image-url="imageUrl"
            :image-uri="imageUri"
            v-if="componentToLoad === 'successfull'"
        />
    </div>
</template>

<script>
import ImageUploadForm from '@/components/ImageUploadForm';
import Axios from 'axios';
import Loading from '@/components/Loading';
import SuccessfullPanel from '@/components/SuccessfullPanel';
export default {
    name: 'MainView',
    components: {
        SuccessfullPanel,
        Loading,
        ImageUploadForm
    },
    data() {
        return {
            componentToLoad: 'uploadForm',
            imageUrl: '',
            imageUri: ''
        };
    },
    methods: {
        uploadFile(file) {
            this.componentToLoad = 'loading';
            Axios.post('http://localhost:7000/upload', file, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(({ data }) => {
                    setTimeout(() => {
                        this.imageUrl = data.url;
                        this.imageUri = data.uri;
                        this.componentToLoad = 'successfull';
                    }, 1000);
                })
                .catch(err => {
                    const statusCode = err.response.data.code;
                    const message = err.response.data.message;
                    console.log(statusCode, message);
                });
        }
    }
};
</script>

<style></style>
