import Feedback from "../../Pages/Feedback/Feedback.jsx";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="lg:pl-64 pl-0 mx-auto w-full">
            <div className="text-center sm:py-10 py-4 text-xs text-dark">
                <h1>
                    © <a href="https://bii-intranet.dk">BII Intranet </a> all rights reserved {year}
                </h1>
            </div>

            <div className="fixed right-4 bottom-4 z-50">
                <Feedback />
            </div>
        </div>
    );
}