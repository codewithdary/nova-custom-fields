<template>
    <svg :width="width" :height="height" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0.5H3.2C1.44 0.5 0.0160004 1.94 0.0160004 3.7L0 29.3C0 31.06 1.424 32.5 3.184 32.5H22.4C24.16 32.5 25.6 31.06 25.6 29.3V10.1L16 0.5ZM22.4 29.3H3.2V3.7H14.4V11.7H22.4V29.3ZM6.4 21.316L8.656 23.572L11.2 21.044V27.7H14.4V21.044L16.944 23.588L19.2 21.316L12.816 14.9L6.4 21.316Z" :fill="fill"/>
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
        default: 26
    },
    height: {
        type: Number,
        default: 33
    }
});
</script>
