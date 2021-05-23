<template>
    <div class="h-screen">
        <logo />
        <div class="w-full flex justify-center flex-col items-center">
            <ImageUploadForm
                @uploadFile="uploadFile"
                v-if="componentToLoad === 'uploadForm'"
            />
            <loading v-if="componentToLoad === 'loading'" />
            <successfull-panel
                :image-url="imageUrl"
                :image-uri="imageUri"
                v-if="componentToLoad === 'successfull'"
                @show-notification="handleNotification"
            />
            <notificacions
                message="Copy to clipboard"
                type="success"
                id="success"
            />
            <notificacions type="fail" message="Invalid file" id="error" />
        </div>
    </div>
</template>

<script>
import ImageUploadForm from '@/components/ImageUploadForm';
import Axios from 'axios';
// import gql from 'graphql-tag';
import Loading from '@/components/Loading';
import SuccessfullPanel from '@/components/SuccessfullPanel';
import Logo from '@/components/Logo';
import Notificacions from '@/components/Notificacions';

export default {
    name: 'Upload',
    components: {
        Notificacions,
        Logo,
        SuccessfullPanel,
        Loading,
        ImageUploadForm
    },
    data() {
        return {
            componentToLoad: 'uploadForm',
            imageUrl: '',
            imageUri: '',
            showNotification: false
        };
    },
    methods: {
        uploadFile(file) {
            this.componentToLoad = 'loading';
            // this.$apollo.mutate({
            //     mutation: gql`
            //         mutation upload($file: Upload!) {
            //             uploadImage(file: $file) {
            //                 name
            //                 url
            //             }
            //         }
            //     `,
            //     variables: {
            //         file
            //     }
            // });
            // .then(() => {
            // setTimeout(() => {
            //     this.imageUrl = `${process.env.VUE_APP_HOST}/${data.url}`;
            //     this.imageUri = data.uri;
            //     this.componentToLoad = 'successfull';
            // }, 1000);
            // });
            // .catch(err => {
            //     const statusCode = err.response.data.code;
            //     const message = err.response.data.message;
            //     console.log(statusCode, message);
            // });
            Axios.post(`${process.env.VUE_APP_API}/upload`, file, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(({ data }) => {
                    setTimeout(() => {
                        this.imageUrl = `${process.env.VUE_APP_HOST}/${data.url}`;
                        this.imageUri = data.uri;
                        this.componentToLoad = 'successfull';
                    }, 1000);
                })
                .catch(err => {
                    const statusCode = err.response.data.code;
                    const message = err.response.data.message;
                    console.log(statusCode, message);
                });
        },
        handleNotification() {
            this.showNotification = true;
        }
    }
};
</script>

<style></style>
