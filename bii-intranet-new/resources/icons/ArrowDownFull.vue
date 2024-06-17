<template>
    <div class="inline-block">
        <svg class="inline-block" :width="width" :height="height" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666748 0.666687L4.00008 4.00002L7.33341 0.666687H0.666748Z" :fill="fill"/>
        </svg>
    </div>
</template>

<script setup>
defineProps({
    fill: {
        type: String,
        default: "#00464B"
    },
    width: {
        type: Number,
        default: 8
    },
    height: {
        type: Number,
        default: 4
    }
});
</script>
