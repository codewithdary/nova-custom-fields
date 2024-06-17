<template>
    <svg :width="width" :height="height" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0.94L1.90958 4L5 7.06L4.04858 8L3.01992e-07 4L4.04858 4.15877e-08L5 0.94Z" :fill="fill"/>
    </svg>
</template>
<script setup>
defineProps({
    fill: {
        type: String,
        default: "#666666"
    },
    width: {
        type: Number,
        default: 8
    },
    height: {
        type: Number,
        default: 14
    }
});
</script>
