<template>
    <div class="inline-block rotate-180">
        <svg class="inline-block" :width="width" :height="height" viewBox="8.59 6 7.41 12">
            <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
        </svg>
    </div>
</template>

<script setup>
defineProps({
    fill: {
        type: String,
        default: "#050F11"
    },
    width: {
        type: Number,
        default: 10
    },
    height: {
        type: Number,
        default: 11
    }
});
</script>
