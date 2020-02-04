export function capitalize(string) {
    if (process.env.NODE_ENV !== 'production' && typeof string !== 'string') {
        throw new Error(
            'InvestiraReact: capitalize(string) expects a string argument.'
        );
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function classList(classes) {
    return Object.entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ');
}
