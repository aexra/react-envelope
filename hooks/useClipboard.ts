export const useClipboard = () => {
    const copy = (text: string, onCopy: (text: string) => void, onError: (error: Error) => void, onEmpty: () => void) => {
        if (text && text != "") {
            navigator.clipboard.writeText(text).then(function () {
                onCopy(text);
            }).catch(function (error) {
                onError(error);
            });
        } else {
            onEmpty();
        }
    };

    return { copy };
};