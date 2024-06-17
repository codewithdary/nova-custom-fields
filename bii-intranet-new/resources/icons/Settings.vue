<template>
    <svg class="inline-block" :width="width" :height="height" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.333252 10.7037V12.1852H4.7777V10.7037H0.333252ZM0.333252 1.81479V3.29628H7.74066V1.81479H0.333252ZM7.74066 13.6666V12.1852H13.6666V10.7037H7.74066V9.2222H6.25918V13.6666H7.74066ZM3.29621 4.77776V6.25924H0.333252V7.74072H3.29621V9.2222H4.7777V4.77776H3.29621ZM13.6666 7.74072V6.25924H6.25918V7.74072H13.6666ZM9.22214 4.77776H10.7036V3.29628H13.6666V1.81479H10.7036V0.333313H9.22214V4.77776Z" :fill="fill"/>
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
        default: 14
    },
    height: {
        type: Number,
        default: 14
    }
});
</script>
