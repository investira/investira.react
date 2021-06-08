import React from 'react';
import {
    default as MuiAutocomplete,
    createFilterOptions
} from '@material-ui/lab/Autocomplete';

function Autocomplete(props) {
    const filter = createFilterOptions();

    const filterOptions = (pOptions, pParams) => {
        const filtered = filter(pOptions, pParams);

        // Sugere a criacão de um novo valor
        if (pParams.inputValue !== '') {
            filtered.push({
                inputValue: pParams.inputValue,
                label: `Add "${pParams.inputValue}"`
            });
        }

        return filtered;
    };

    return <MuiAutocomplete {...props} filterOptions={filterOptions} />;
}

export default Autocomplete;
