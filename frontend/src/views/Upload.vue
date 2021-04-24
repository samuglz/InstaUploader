<template>
    <div class="h-screen">
        <logo />
        <div class="w-full flex justify-center">
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
    </div>
</template>

<script>
import ImageUploadForm from '@/components/ImageUploadForm';
import Axios from 'axios';
import Loading from '@/components/Loading';
import SuccessfullPanel from '@/components/SuccessfullPanel';
import Logo from '@/components/Logo';
export default {
    name: 'Upload',
    components: {
        Logo,
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
                        this.imageUrl = `http://localhost:8080/${data.url}`;
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
