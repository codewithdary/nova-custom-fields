import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TextEditorDefault = ({height = 300}) => {
    const editorRef = useRef(null);

    return (
        <Editor
            apiKey="76s09ub2le5gtytxrjaoxp4p8g452rhtlpytdbvi6hjhk3hd"
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue=""
            init={{
                height: {height},
                menubar: false,
                toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat',
                plugins: [
                    ''
                ],
                content_style: 'body { ' +
                    'font-family:Poppins; ' +
                    'font-size:18px' +
                    ' }'
            }}
        />
    );
}