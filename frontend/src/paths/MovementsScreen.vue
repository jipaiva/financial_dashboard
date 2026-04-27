<script setup></script>

<template>
    <div class="container">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
}

.box1 {
    background-color: white;
    width: 25%;
    height: 75%;
    border-radius: 8px;
}

.box2 {
    background-color: white;
    width: 55%;
    height: 75%;
    border-radius: 8px;
}
</style>