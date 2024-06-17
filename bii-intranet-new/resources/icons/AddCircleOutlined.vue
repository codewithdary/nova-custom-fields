<template>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.4 2H3.6V3.6H2V4.4H3.6V6H4.4V4.4H6V3.6H4.4V2ZM4 0C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8C6.208 8 8 6.208 8 4C8 1.792 6.208 0 4 0ZM4 7.2C2.236 7.2 0.8 5.764 0.8 4C0.8 2.236 2.236 0.8 4 0.8C5.764 0.8 7.2 2.236 7.2 4C7.2 5.764 5.764 7.2 4 7.2Z"
            :fill="fill"/>
    </svg>
</template>
<script>
export default {
    props: {
        fill: {
            type: String,
            default: '#050F11',
        },
    }
}
</script>
