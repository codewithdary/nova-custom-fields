export const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

export const truncateTextByCharacters = (text, charLimit = 255) => {
    if (text.length > charLimit) {
        return text.slice(0, charLimit) + '...';
    }
    return text;
};

export const stripHtmlTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
};
