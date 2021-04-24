<template>
    <div
        class="font-logo w-full h-40 flex justify-center items-center cursor-pointer"
        @click="goToHomepage"
    >
        <img src="../assets/img/logo.svg" alt="logo icon" class="w-20 h-20" />
        <div class="text-6xl mx-4 text-black">InstaUpload</div>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    methods: {
        goToHomepage() {
            if (this.$route.path !== '/') this.$router.push('/');
        }
    }
};
</script>

<style scoped>
@font-face {
    font-family: logoFont;
    src: url('../assets/fonts/Kaushan.ttf');
}
.font-logo {
    font-family: logoFont, serif;
}
</style>
