<template>
    <form
        class="
            w-80
            h-96
            shadow-box
            rounded-md
            flex flex-col
            justify-around
            items-center
            bg-white
        "
    >
        <h3 class="text-xl font-semibold text-gray-700">Upload your image</h3>
        <p class="text-xs font-semibold text-gray-500">
            File should be Jpeg, Png,...
        </p>
        <drag-drop @getFile="handleDragDrop" />
        <span class="text-gray-400 text-sm font-semibold">Or</span>
        <button
            type="button"
            class="
                bg-blue-500
                text-white
                font-semibold
                px-4
                py-2
                rounded-lg
                hover:bg-blue-400
            "
            @click="handleSubmit"
        >
            Choose a file
        </button>
        <input
            ref="fileinput"
            type="file"
            class="hidden"
            accept=".png,.jpeg,.jpg"
            @change="getFile"
        />
    </form>
</template>

<script>
import DragDrop from '@/components/DragDrop';
import { event } from '@/events';
export default {
    name: 'ImageUploadForm',
    components: { DragDrop },
    data() {
        return {
            file: new FormData()
        };
    },
    methods: {
        getFile(e) {
            // this.file = new FormData();
            // this.file.append('userFile', e.target.files[0]);
            // const file = new FormData();
            // file.append('userFile', e.target.files[0]);
            // console.log('type', typeof e.target.files[0]);
            if (this.isValidFile(e.target.files[0])) {
                this.$emit('uploadFile', e.target.files[0]);
            } else {
                event.$emit('Show', 'error');
            }
        },
        handleSubmit() {
            this.$refs.fileinput.click();
        },
        handleDragDrop(file) {
            if (this.isValidFile(file)) {
                // this.file = new FormData();
                // this.file.append('userFile', file);
                this.$emit('uploadFile', file);
            } else {
                event.$emit('Show', 'error');
            }
        },
        isValidFile(file) {
            const VALID_EXTENSIONS = ['png', 'jpeg', 'jpg'];
            return VALID_EXTENSIONS.includes(
                file.name.split('.')[file.name.split('.').length - 1]
            );
        }
    }
};
</script>

<style scoped></style>
