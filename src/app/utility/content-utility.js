export function isNumeric(value) {
    return (
        typeof value === "string" && value.trim() !== "" && !isNaN(Number(value))
    );
}

export function materializeContents(contents) {
    const keys = {};

    contents.forEach((element) => {
        if (element.key.includes("[") && element.key.includes("]")) {
            const split = element.key.split("[");
            const topKey = split[0];
            const subKey = split[1].replace("]", "");

            // If subkey is numeric, treat it as an array, otherwise as an obj
            if (isNumeric(subKey)) {
                if (!keys.hasOwnProperty(topKey)) {
                    keys[topKey] = [];
                }
                keys[topKey].push(element.value);
            } else {
                if (!keys.hasOwnProperty(topKey)) {
                    keys[topKey] = {};
                }
                keys[topKey][subKey] = element.value;
            }
        } else {
            keys[element.key] = element.value;
        }
    });
    return keys;
}
