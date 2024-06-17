import '../../index.css';
import {DefaultAccordion} from "../../components/Accordion/DefaultAccordion";
import PageHeader from "../../components/Helper/PageHeader";

export const ReleaseNotes = () => {
    return (
        <div>
            <PageHeader
                header="Release Notes"
                subheader="New Features"
            />

            <DefaultAccordion />
        </div>
    )
}
