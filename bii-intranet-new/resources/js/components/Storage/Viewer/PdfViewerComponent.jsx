import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current; // This `useRef` instance will render the PDF.

        let PSPDFKit, instance;

        (async function () {
            PSPDFKit = await import("pspdfkit")

            PSPDFKit.unload(container) // Ensure that there's only one PSPDFKit instance.

            instance = await PSPDFKit.load({
                // Container where PSPDFKit should be mounted.
                container,
                // The document to open.
                document: props.document,
                // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
                baseUrl: `https://bii-intranet-v2.test/`
            });
        })();

        return () => PSPDFKit && PSPDFKit.unload(container)
    }, []);

    // This div element will render the document to the DOM.
    return <div ref={containerRef} style={{ width: "100%", height: "90vh" }} />
}
