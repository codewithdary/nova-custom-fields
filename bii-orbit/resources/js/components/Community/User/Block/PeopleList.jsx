import React from "react";
import { PeopleItem } from "./PeopleItem.jsx";
import ListLayout from "../../../Layout/ListLayout.jsx";
import { FadeIn } from "../../../../helper/Content/FadeIn.jsx";

export default function PeopleList({ t, hasMore, next, dataLength, style, items, noResultsText, loadingText }) {
    return (
        <ListLayout
            next={next}
            style={style}
            items={items}
            hasMore={hasMore}
            dataLength={dataLength}
            loadingText={loadingText}
            noResultsText={noResultsText}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
                {items.map((item) => (
                    <FadeIn key={item.id || item.userIndex}>
                        <PeopleItem
                            t={t}
                            user={item}
                            userIndex={item.userIndex}
                        />
                    </FadeIn>
                ))}
            </div>
        </ListLayout>
    );
}
