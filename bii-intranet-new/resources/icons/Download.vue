<template>
    <svg class="inline-block" :width="width" :height="height" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 8.5H7.08824V7.55882H0.5V8.5ZM7.08824 3.32353H5.20588V0.5H2.38235V3.32353H0.5L3.79412 6.61765L7.08824 3.32353Z" :fill="fill"/>
</svg>

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
        default: 9
    }
});
</script>
