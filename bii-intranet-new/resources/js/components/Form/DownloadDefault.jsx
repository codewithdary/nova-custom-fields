import { PaperClipIcon } from '@heroicons/react/20/solid'
import {toast} from "react-toastify";

export function DownloadDefault({ item }) {
    const notify = () => {
        toast("You have successfully downloaded the document.");
    }

    return (
        <div className="px-4 pb-1 sm:col-span-2 sm:px-0" key={item.id}>
            <dd className="mt-2 text-sm text-gray-900">
                <ul role="list" className="divide-y divide-primary-header rounded-md border border-nav-hover shadow-md hover:shadow-lg transition-all hover:scale-95 hover:bg-gray-50">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />

                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                <span className="truncate font-medium text-primary-header">
                                    {item.name ? item.name : item.document_name}
                                </span>

                                <span className="flex-shrink-0 text-nav-hover">
                                    {(item.document_size / 1024).toFixed(2)} MB
                                </span>
                            </div>
                        </div>

                        <div className="ml-4 flex-shrink-0">
                            <a
                                onClick={notify}
                                download={item.document_name}
                                href={item.document_path}
                                className="font-medium text-nav hover:text-nav-hover transition-all">
                                Download
                            </a>
                        </div>
                    </li>
                </ul>
            </dd>
        </div>
    );
}