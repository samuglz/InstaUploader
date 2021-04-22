<template>
    <div
        class="w-80 h-96 shadow-box rounded-md flex flex-col justify-evenly items-center bg-white"
    >
        <div class="flex flex-col justify-center items-center">
            <img
                class="w-8 h-8"
                src="../assets/img/check.svg"
                alt="check icon"
            />
            <h3 class="text-sm text-gray-700 font-semibold py-2">
                Uploaded Succesfully!
            </h3>
        </div>
        <img
            :src="imageUri"
            alt="uploaded image preview"
            class="w-3/4 rounded-lg shadow-image"
        />
        <div
            class="w-64 bg-gray-50 border-gray-300 border-solid border-2 rounded-md h-10 flex justify-end p-1 items-center"
        >
            <span class="text-sm link w-1/2 flex-grow">{{ imageUrl }}</span>
            <button
                class="bg-blue-500 text-white text-xs font-semibold flex flex-nowrap focus:outline-none px-2 py-2 rounded-md hover:bg-blue-400"
            >
                Copy Link
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuccessfullPanel',
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        imageUri: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.shadow-image {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
}
.link {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
