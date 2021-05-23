<template>
    <div class="h-screen">
        <div class="flex justify-center items-center flex-col" v-if="imgExist">
            <logo />
            <img
                :src="img.url"
                :alt="img.name"
                class="rounded-md w-1/3"
                :style="{ 'box-shadow': '0 0 10px 2px rgba(0,0,0,0.1)' }"
            />
        </div>
        <div v-if="!imgExist">
            <NotFound />
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo';
import NotFound from '@/components/NotFound';
import gql from 'graphql-tag';
export default {
    name: 'Img',
    components: { Logo, NotFound },
    apollo: {
        img: {
            query: gql`
                query getimg($id: String!) {
                    image(id: $id) {
                        name
                        url
                    }
                }
            `,
            variables() {
                return {
                    id: `${this.$route.params.id}`
                };
            },
            update: data => data.image,
            error() {
                this.imgExist = false;
            }
        }
    },
    data() {
        return {
            imgExist: true,
            img: {}
        };
    }
};
</script>
