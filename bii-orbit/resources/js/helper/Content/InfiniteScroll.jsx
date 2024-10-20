import {useEffect, useState} from "react";

const useInfiniteScroll = (initialItems, allItems) => {
    const [items, setItems] = useState(initialItems);
    const [hasMore, setHasMore] = useState(items.length < allItems.length);

    useEffect(() => {
        setItems(allItems.slice(0, 10));
        setHasMore(allItems.length > 10);
    }, [allItems]);

    const fetchMoreData = () => {
        if (items.length >= allItems.length) {
            setHasMore(false);
            return;
        }
        setItems(items.concat(allItems.slice(items.length, items.length + 10)));
    };

    return { items, setItems, hasMore, fetchMoreData };
};

export default useInfiniteScroll;
