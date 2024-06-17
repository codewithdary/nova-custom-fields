<template>
    <svg class="inline-block rotate-180" :width="width" :height="height" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3337 5.33333H3.22033L6.94699 1.60666L6.00033 0.666664L0.666992 6L6.00033 11.3333L6.94033 10.3933L3.22033 6.66666H11.3337V5.33333Z" :fill="fill"/>
    </svg>
</template>

<script setup>
defineProps({
    fill: {
        type: String,
        default: "#050F11"
    },
    width: {
        type: Number,
        default: 12
    },
    height: {
        type: Number,
        default: 12
    }
});
</script>
