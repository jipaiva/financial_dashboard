<script></script>

<template>
    <div class="container">
        <div class="infoBox"></div>
        <div class="optionsRow">
            <button class="button1"><i class="bi bi-cash-coin"></i></button>
            <button class="button1"><i class="bi bi-piggy-bank"></i></button>
        </div>
    </div>
</template>

<style>
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

.infoBox {
    aspect-ratio: 1/2;
    width: 50%;
    /* height: 350px; */
    border-radius: 8px;
    background-color: white;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}
</style>