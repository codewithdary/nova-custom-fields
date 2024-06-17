import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export const TextEditorDefault = ({ id, value = null, type, height = "300px", onChange, onContentChange, error }) => {
    const editorRef = useRef(null);

    const handleEditorChange = (description, editor) => {
        onContentChange(description);
    }

    const initSettings = {
        menubar: true,
        toolbar:
            'h1 h2 h3 |undo redo | ' +
            'bold italic backcolor | alignleft aligncenter | formatselect' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat',
        plugins: [
            ''
        ],
        content_style: 'body { ' +
            'font-family:Poppins; ' +
            'font-size:16px' +
            ' }'
    };

    return (
        <div>
            <Editor
                value={value}
                id={id}
                type={type}
                onChange={onChange}
                onEditorChange={handleEditorChange}
                apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                    height: height,
                    ...initSettings
                }}
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
};
