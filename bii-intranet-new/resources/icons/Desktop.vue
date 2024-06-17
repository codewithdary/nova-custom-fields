<template>
    <div class="inline-block">
        <svg class="inline-block" :width="width" :height="height" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5455 0L1.45455 0C0.654545 0 0 0.654545 0 1.45455L0 10.1818C0 10.9818 0.654545 11.6364 1.45455 11.6364H6.54545V13.0909H5.09091V14.5455H10.9091V13.0909H9.45455V11.6364H14.5455C15.3455 11.6364 16 10.9818 16 10.1818V1.45455C16 0.654545 15.3455 0 14.5455 0ZM14.5455 10.1818H1.45455V1.45455H14.5455V10.1818Z" :fill="fill"/>
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
        default: 16
    },
    height: {
        type: Number,
        default: 15
    }
});
</script>
