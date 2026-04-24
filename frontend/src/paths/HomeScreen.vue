<script setup>
import HomescreenClock from '@/components/HomescreenClock.vue';
</script>

<template>
    <div class="container">
        <div><HomescreenClock /></div>
        <div class="optionsRow">
            <button class="button1"><i class="bi bi-cart3"></i></button>
            <button class="button1"><i class="bi bi-piggy-bank"></i></button>
            <button class="button1"><i class="bi bi-gear"></i></button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* vertical */
    align-items: center;     /* horizontal */
    height: 100vh;
    gap: 20px;
}

.container div {
    padding: 10px;
}

.optionsRow {
    display: flex;
    flex-direction: row;
    gap: 15px;
}
</style>