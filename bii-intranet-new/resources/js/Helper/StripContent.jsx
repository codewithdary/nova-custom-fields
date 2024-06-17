import he from 'he';

const stripContent = ({ content, slice }) => {
        const decodedContent = he.decode(content);
        const strippedContent = decodedContent.replace(/<[^>]+>/g, '');
        const words = strippedContent.split(' ');
        const strippedWords = words.slice(0, slice).join(' ');

        return strippedWords;
}

export default stripContent;
