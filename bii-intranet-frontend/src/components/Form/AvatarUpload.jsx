import React, {useEffect, useState} from "react";
import {Avatar } from "@material-tailwind/react";

export const AvatarUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className="col-span-full grid grid-cols-2">
            <div>
                {selectedFile ? (
                    <Avatar
                        variant="circular"
                        alt="Avatar of Dary Nazar"
                        className="cursor-pointer w-16 h-16"
                        src={preview}
                    />
                ) : (
                    <span className="flex w-16 h-16 shrink-0 w-50 text-normal items-center text-center justify-center rounded-full border border-nav transition-all  bg-nav text-[0.625rem] text-gray-400 font-extrabold">
                    DN
                </span>
                )}
            </div>

            <div>
                <label
                    htmlFor="file-upload"
                    className="select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none float-right  normal-case font-poppins bg-dark">
                <span>
                    Choose file
                </span>
                    <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={onSelectFile}
                    />
                </label>
            </div>
            <p className="pb-4 text-paragraph inline text-sm pt-2 col-span-2">
                Maximum upload size: 10 MB. Supported types: jpg, png, jpeg & svg.
            </p>
        </div>
    )
}