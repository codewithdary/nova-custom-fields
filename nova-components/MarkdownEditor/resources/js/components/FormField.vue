<template>
  <DefaultField
    :field="field"
    :errors="errors"
    :show-help-text="showHelpText"
    :full-width-content="fullWidthContent"
  >
    <template #field>
        <QuillEditor
            :id="field.attribute"
            type="text"
            v-model:content="value"
            :contentType="'html'"
            :options="options"
        />
    </template>
  </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  components: {
     QuillEditor
  },

  data() {
    return {
        options: {
            // modules: {
            //     toolbar: ['bold', 'italic', 'underline'],
            // },
            placeholder: 'Description of the beautiful markdown field',
            theme: 'snow'
        }
    }
  },

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.value = this.field.value || ''
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.fieldAttribute, this.value || '')
    },
  },
}
</script>
