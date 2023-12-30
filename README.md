## Laravel Nova Custom Field Tutorial

This tutorial will guide you through the process of creating a custom field in Laravel Nova. We will be using the example of creating a Markdown Editor field.
•	Twitter: [@codewithdary](https://twitter.com/codewithdary) <br>
•	Instagram: [@codewithdary](https://www.instagram.com/codewithdary/) <br>
•	TikTok: [@codewithdary](https://tiktok.com/@codewithdary) <br>
•	Blog: [@codewithdary](https://blog.codewithdary.com) <br>
•	Patreon: [@codewithdary](https://www.patreon.com/user?u=30307830) <br>
<br>

### Generating the Custom Field

To start, navigate to the root directory of your Laravel project and run the following command in your terminal:

```bash
php artisan nova:field codewithdary/markdown-editor
```

Replace `codewithdary` with your desired vendor name and `markdown-editor` with the name of your custom field package.

#### Updating Composer Packages

When prompted, choose to update your Composer packages by entering `yes`.

#### Installing NPM Dependencies

Next, choose to install the field's NPM dependencies by entering `yes`. This will ensure that all necessary frontend assets are installed.

#### Compiling the Field's Assets

Finally, choose to compile the field's assets by entering `yes`. This will generate the required JavaScript and CSS files for the custom field.

### Implementing the Custom Field

Navigate to the `nova-components` directory in your project's root directory. Inside the `nova-components` directory, locate the directory corresponding to your custom field package.

In the example of the Markdown Editor field, the directory name would be `MarkdownEditor`.

Inside the package directory, you will find the following files and directories:

- `dist`: Contains the compiled assets of the field.
- `node_modules`: Contains the necessary NPM dependencies for the field.
- `resources`: Contains the custom CSS files for the field.
- `src`: Contains the FieldServiceProvider and the main field component file.

### Styling the Field (optional)

To style the field, navigate to the `resources/css` directory inside your custom field package. Open the `app.css` file and add the following CSS code to adjust the height of the editor:

```css
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    overflow: hidden;
    height: 100px;
}
```

### Using the Custom Field

To use the custom field in your Nova resource, open the resource file (`User.php` in this example) and import the custom field class at the top of the file:

```php
use Codewithdary\MarkdownEditor\MarkdownEditor;
```

In the `fields` method of your resource class, add the custom field to the desired field set:

```php
MarkdownEditor::make('Description'),
```

### Step 8: Updating the Field Placeholder

We're going to use [QuillEditor](https://vueup.github.io/vue-quill/) to customize the field, here's an example:

```html
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
                    placeholder: 'Description of the beautiful markdown field',
                    theme: 'snow'
                }
            }
        },

        methods: {
            setInitialValue() {
                this.value = this.field.value || ''
            },
            
            fill(formData) {
                formData.append(this.fieldAttribute, this.value || '')
            },
        },
    }
</script>
```

### Compiling the Field Assets

To compile the custom field's assets, navigate to the root directory of your Laravel project and run the following command in your terminal:

```bash
cd nova-components/MarkdownEditor
npm run watch
```

### Testing the Custom Field

After compiling the field's assets, refresh your Nova admin panel in the browser. You will now see the custom field available in the form. Test its functionality and verify that the changes you made are reflected correctly.

Congratulations! You have successfully created a custom field in Laravel Nova.

## Conclusion

In this tutorial, we covered the steps required to create a custom field in Laravel Nova. We explored how to generate the field, install dependencies, compile assets, and implement the field in a Nova resource. We also discussed how to style the field and update its placeholder text.

Feel free to experiment with different custom fields and explore the possibilities of Laravel Nova. If you have any questions or need further assistance, please leave a comment or refer to the official Laravel Nova documentation.

Don't forget to give this tutorial a thumbs up if you found it helpful, and consider subscribing to our channel for more Laravel Nova tutorials.

## Credits due where credits due…

Thanks to Laravel for giving me the opportunity to make this tutorial on Sessions.

