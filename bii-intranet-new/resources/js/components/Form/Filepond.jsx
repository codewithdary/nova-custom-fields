import React, {useEffect, useState} from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType)

export const Filepond = ({ id, label, value, handleImageChange, name, allowMultiple, maxFiles, error, acceptedFileTypes, current = null}) => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        if (current) {
            setFiles(current);
        }
    }, [current]);

    return (
        <div>
            <FilePond
                pre
                id={id}
                name={name}
                files={files}
                value={value}
                labelIdle={label}
                maxFiles={maxFiles}
                onupdatefiles={setFiles}
                onChange={handleImageChange}
                allowMultiple={allowMultiple}
                acceptedFileTypes={acceptedFileTypes}
                onprocessfile={() => {
                    const imagePath = document.querySelector('input[name="image"]').value;

                    handleImageChange(imagePath);
                }}
                server={{
                    url: '/uploads/process',
                    process: {
                        method: 'POST',
                        withCredentials: true,
                        headers: {
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                        },
                    }
                }}
            />

            {error && <div className="text-warning text-xs pt-2">
                {error}
            </div>}
        </div>
    );
}