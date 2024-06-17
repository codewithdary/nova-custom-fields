import React, { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop)

export const Filepond = ({label}) => {
    const [files, setFiles] = useState([])

    return (
        <FilePond
            pre
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={1}
            server="https://staging.bii-intranet.dk/filestorage"
            value=""
            name="files"
            labelIdle={label}
        />
    );
}