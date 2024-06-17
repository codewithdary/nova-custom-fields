<template>
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.57445 8.41045L1.39264 5.27612L0.332031 6.3209L4.57445 10.5L13.6654 1.54478L12.6048 0.5L4.57445 8.41045Z"
            :fill="fill"/>
    </svg>
</template>
<script>
export default {
    props: {
        fill: {
            type: String,
            default: 'white',
        },
    }
}
</script>
