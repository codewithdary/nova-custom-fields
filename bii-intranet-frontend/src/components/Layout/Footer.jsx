import {Feedback} from "../Form/Feedback";

export const Footer = () => {
    return (
        <div>
            <div className="text-center mx-auto w-full sm:py-10 py-4 text-xs text-dark">
                <h1>
                    © <a href="https://bii-intranet.dk">BII Intranet </a> all rights reserved 2024
                </h1>
            </div>

            <div className="fixed right-4 bottom-4 z-50">
                <Feedback />
            </div>
        </div>
    );
}