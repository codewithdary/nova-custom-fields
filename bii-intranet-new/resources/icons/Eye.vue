<template>
    <svg class="inline-block" :width="width" :height="height"  viewBox="1 4.5 22 15"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" :fill="fill" /></svg>
</template>

<script setup>
defineProps({
    fill: {
        type: String,
        default: "#00464B"
    },
    width: {
        type: Number,
        default: 16
    },
    height: {
        type: Number,
        default: 14
    }
});
</script>
