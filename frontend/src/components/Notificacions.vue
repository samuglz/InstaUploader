<template>
    <div class="my-5">
        <div
            v-if="show"
            class="w-80 h-full font-semibold rounded-md flex items-center"
            :class="{
                'bg-green-400 text-white': type === 'success',
                'bg-red-500 text-white': type === 'fail',
                'bg-yellow-300 text-black': type === 'warning'
            }"
        >
            <div class="flex-grow px-4 py-2">
                <h3 class="text-2xl py-1" v-if="title">{{ title }}</h3>
                <p class="text-sm py-1">{{ message }}</p>
            </div>
            <div
                class="w-1/6 h-full flex justify-center items-center text-2xl cursor-pointer"
                @click="closeNotification"
            >
                &times;
            </div>
        </div>
    </div>
</template>

<script>
import { event } from '@/events';

export default {
    name: 'Notificacions',
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            required: true,
            default: ''
        },
        type: {
            type: String,
            default: 'Success'
        }
    },
    created() {
        event.$on('Show', () => {
            this.enableNotification();
        });
    },
    data() {
        return {
            show: false,
            timeoutDisable: null
        };
    },
    methods: {
        closeNotification() {
            clearInterval(this.timeoutDisable);
            this.show = false;
        },
        disableNotification() {
            this.timeoutDisable = setTimeout(() => {
                this.show = false;
            }, 1500);
        },
        enableNotification() {
            this.show = true;
            this.disableNotification();
        }
    }
};
</script>

<style scoped></style>
