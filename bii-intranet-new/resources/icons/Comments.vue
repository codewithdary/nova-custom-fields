<template>
    <div class="inline-block">
        <svg class="inline-block" :width="width" :height="height"  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4 2.4H10.2V7.8H2.4V9C2.4 9.33 2.67 9.6 3 9.6H9.6L12 12V3C12 2.67 11.73 2.4 11.4 2.4ZM9 6V0.6C9 0.27 8.73 0 8.4 0L0.6 0C0.27 0 0 0.27 0 0.6L0 9L2.4 6.6H8.4C8.73 6.6 9 6.33 9 6Z" :fill="fill"/>
        </svg>
    </div>
</template>

<script setup>
defineProps({
    fill: {
        type: String,
        default: "#666666"
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
