<template>
    <div
        class="w-full flex flex-col justify-center items-center font-notfound font-bold text-white"
    >
        <div class="text-9xl">404</div>
        <div class="text-6xl">This page doesn't exit</div>
    </div>
</template>

<script>
export default {
    name: '404'
};
</script>

<style scoped>
@font-face {
    font-family: NotFound;
    src: url('../assets/fonts/RobotoMono.ttf');
}
.font-notfound {
    font-family: NotFound;
}
</style>
