import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-markdown-editor', IndexField)
  app.component('detail-markdown-editor', DetailField)
  app.component('form-markdown-editor', FormField)
})
