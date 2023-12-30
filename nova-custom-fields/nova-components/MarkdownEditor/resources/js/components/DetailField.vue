<template>
  <PanelItem :index="index" :field="field" />
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

    computed: {
        fieldValue() {
            this.field.value = this.strippedContent()
            return this.field.displayedAs || this.field.value
        },
    }
}
</script>
