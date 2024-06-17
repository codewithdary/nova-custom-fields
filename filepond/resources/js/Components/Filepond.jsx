import 'filepond/dist/filepond.min.css'
import React, {useEffect, useState} from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType)

export const Filepond = ({ server, id, label, value, handleImageChange, name, allowMultiple, maxFiles, error, acceptedFileTypes, current = null}) => {
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
                imageResizeTargetWidth={200}
                imageResizeTargetHeight={144}
                imageResizeUpscale={false}
                imageResizeMode={"contain"}

                id={id}
                name={name}
                files={files}
                value={value}
                labelIdle={label}
                maxFiles={maxFiles}
                onupdatefiles={setFiles}
                onChange={handleImageChange}
                allowMultiple={allowMultiple}
                type={"local"}
                // acceptedFileTypes={acceptedFileTypes}
                server={{
                    url: server,
                    process: {
                        method: 'POST',
                        withCredentials: true,
                        // headers: {
                        //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                        //     'Access-Control-Allow-Origin': '*'
                        // },
                    }
                }}
            />
        </div>
    );
}
