<template>
    <div
        class="w-56 h-40 border-blue-200 border border-solid rounded-md flex flex-col justify-evenly items-center bg-white hover:bg-gray-100"
        @dragover.prevent
        @dragenter.prevent
        @drop.prevent="handleDrop($event)"
    >
        <img src="@/assets/img/photo-icon.svg" alt="photo icon" />
        <p class="text-sm text-gray-400">Drag & Drop your image here</p>
    </div>
</template>

<script>
export default {
    name: 'DragDrop',
    methods: {
        handleDrop(e) {
            const file = e.dataTransfer.files[0];
            this.$emit('getFile', file);
        }
    }
};
</script>

<style scoped></style>
