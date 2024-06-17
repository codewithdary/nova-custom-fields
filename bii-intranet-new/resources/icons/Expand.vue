<template>
    <svg class="inline-block" :width="width" :height="height" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2.51556L6.76253 5.33333L7.99129 4.08L4 0L0 4.08L1.23747 5.33333L4 2.51556ZM4 13.4844L1.23747 10.6667L0.0087148 11.92L4 16L8 11.92L6.76253 10.6667L4 13.4844Z" :fill="fill"/>
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
