<template>
    <svg class="inline-block" :width="width" :height="height" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.65151 0.833008H1.37879C0.712119 0.833008 0.166664 1.37846 0.166664 2.04513V10.53H1.37879V2.04513H8.65151V0.833008ZM10.4697 3.25725H3.80303C3.13636 3.25725 2.59091 3.8027 2.59091 4.46937V12.9542C2.59091 13.6209 3.13636 14.1663 3.80303 14.1663H10.4697C11.1364 14.1663 11.6818 13.6209 11.6818 12.9542V4.46937C11.6818 3.8027 11.1364 3.25725 10.4697 3.25725ZM10.4697 12.9542H3.80303V4.46937H10.4697V12.9542Z" :fill="fill"/>
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
        default: 12
    },
    height: {
        type: Number,
        default: 15
    }
});
</script>
