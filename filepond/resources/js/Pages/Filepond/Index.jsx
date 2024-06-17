import {Filepond} from "@/Components/Filepond.jsx";

export default function Index({ ...props }) {
    return (
        <>
            <div>
                <Filepond
                    id="logo_path"
                    name="logo_path"
                    maxFiles={1}
                    allowMultiple={false}
                    value={props.user.logo_path}
                    current={props.user.full_logo_path}
                    acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']}
                    server=""
                    label='Drag & Drop your file or <span class="filepond--label-action">Browse</span> for your banner'
                />
            </div>
        </>
    );
}
