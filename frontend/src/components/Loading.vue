<template>
    <div
        class="w-80 flex flex-col justify-center items-center shadow-box py-2 px-4 rounded-md"
    >
        <span class="w-full text-left text-sm text-gray-700 font-semibold"
            >Uploading...</span
        >
        <div class="loader animate-spin w-8 h-8"></div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
};
</script>

<style scoped>
.loader {
    border: solid 3px rgba(147, 197, 253, 1);
    border-bottom-color: rgba(59, 130, 246, 1);
    border-radius: 50%;
}
</style>
