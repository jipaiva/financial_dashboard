<script setup>
import { ref, computed, onBeforeUnmount } from 'vue';

const now = ref(new Date());

const addZero = (i) => i < 10 ? "0" + i : i;

const currentTime = computed(() => {
    const d = now.value;

    return addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());
});

const currentDate = computed(() => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const d = now.value;

    return weekday[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
});

const interval = setInterval(() => {
    now.value = new Date();
}, 1000);

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="infoBox">
        <div class="containerColumn">
            <div>{{ currentTime }}</div>
            <div>{{ currentDate }}</div>
            <div class="containerRow">
                <div>IN</div>
                <div>OUT</div>
            </div>
            <div>BALANCE</div>
        </div>
    </div>
</template>

<style scoped>
.infoBox {
    width: 70vw;
    height: 45vh;
    border-radius: 8px;
    background-color: white;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.containerColumn {
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* justify-content: center; Not centering?? */
    align-items: center;
}

.containerRow {
    display: flex;
    flex-direction: row;
    gap: 15px;
}
</style>