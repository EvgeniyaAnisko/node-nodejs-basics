const PREFIX = "--";
const BINDER = " is ";
const SEPARATOR = ", ";

const parseArgs = () => {
    const argsCLI = process.argv
        .slice(2)
        .reduce((acc, value, index, array) => {
            if (value.startsWith(PREFIX)) {
                const formatPart = `${value.substring(2)}${BINDER}${array[index + 1]}`;
                return [...acc, formatPart];
            }
            return acc;
        }, [])
        .join(SEPARATOR);
    console.log(argsCLI);
};

parseArgs();