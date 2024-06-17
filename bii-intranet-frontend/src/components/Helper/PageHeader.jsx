export default function PageHeader({header, subheader}) {
    return (
        <div>
            <span className="text-xs text-nav font-extrabold">
                {subheader}
            </span>

            <h1 className="text-3xl pt-3 font-bold text-primary-header border-b-2 border-gray-100 sm:pb-10 pb-4">
                {header}
            </h1>
        </div>
    );
}