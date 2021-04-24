<template>
    <div class="h-screen">
        <logo />
        <div
            class="w-full text-center flex flex-col justify-center items-center font-notfound font-bold text-black center-screen pb-40"
        >
            <div class="text-9xl my-5">404</div>
            <div class="text-6xl my-5">This page doesn't exit</div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo';
export default {
    name: 'Error404',
    components: { Logo }
};
</script>

<style scoped>
@font-face {
    font-family: NotFound;
    src: url('../assets/fonts/RobotoMono.ttf');
}
.font-notfound {
    font-family: NotFound, serif;
}
.center-screen {
    height: calc(100% - 10rem);
}
</style>
