<template>
    <div id="app">
        <logo />
        <router-view />
    </div>
</template>

<script>
import Logo from '@/components/Logo';
export default {
    components: { Logo }
};
</script>
<style>
body {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom right, #e80eda, #18cdf1);
}
</style>
