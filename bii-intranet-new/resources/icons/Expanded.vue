<template>
    <svg class="inline-block" :width="width" :height="height" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2.81778L6.76253 0L7.99129 1.25333L4 5.33333L0 1.25333L1.23747 0L4 2.81778ZM4.00871 13.1822L6.77124 16L8 14.7467L4.00871 10.6667L0.0087148 14.7467L1.24619 16L4.00871 13.1822Z" :fill="fill"/>
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
        default: 16
    }
});
</script>
