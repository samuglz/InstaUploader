<template>
    <form
        class="w-80 h-96 shadow-box rounded-md flex flex-col justify-around items-center bg-white"
    >
        <h3 class="text-xl font-semibold text-gray-700">Upload your image</h3>
        <p class="text-xs font-semibold text-gray-500">
            File should be Jpeg, Png,...
        </p>
        <div class="w-56 h-40 border-blue-200 border border-solid rounded-md">
            drag and drop
        </div>
        <span class="text-gray-400 text-sm font-semibold">Or</span>
        <button
            type="button"
            class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-400"
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
export default {
    name: 'ImageUploadForm',
    data() {
        return {
            file: new FormData()
        };
    },
    methods: {
        getFile(e) {
            this.file = new FormData();
            this.file.append('userFile', e.target.files[0]);
            this.$emit('uploadFile', this.file);
        },
        handleSubmit() {
            this.$refs.fileinput.click();
        }
    }
};
</script>

<style scoped></style>
