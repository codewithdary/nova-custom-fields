<template>
    <svg :width="width" :height="height" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.93341 0H1.73341C1.14675 0 0.672081 0.48 0.672081 1.06667L0.666748 7.46667C0.666748 8.05333 1.14675 8.53333 1.73341 8.53333H10.2667C10.8534 8.53333 11.3334 8.05333 11.3334 7.46667V2.13333C11.3334 1.54667 10.8534 1.06667 10.2667 1.06667H6.00008L4.93341 0Z"
            :fill="fill"/>
    </svg>
</template>

<script setup>
defineProps({
    fill: {
        type: String,
        default: "#fff"
    },
    width: {
        type: Number,
        default: 12
    },
    height: {
        type: Number,
        default: 9
    }
});
</script>
