export function EventDescription({ title, field }) {
    return (
        <div className="pt-6 w-full block">
            <h2 className="text-sm text-primary-header font-semibold pb-2">
                {title}
            </h2>

            <div
                className="text-paragraph text-primary-header w-11/12"
                 dangerouslySetInnerHTML={{ __html: field }}
            />
        </div>
    );
}