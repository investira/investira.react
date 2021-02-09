import React, { Component } from 'react';

class ErrorFocus extends Component {
    componentDidUpdate(prevProps) {
        const xErrorKeys = Object.keys(this.props.errors);

        if (
            xErrorKeys.length > 0 &&
            this.props.isSubmitting &&
            !this.props.isValidating
        ) {
            const xSelectorId = `[id="${xErrorKeys[0]}"]`;
            const xSelectorName = `[name="${xErrorKeys[0]}"]`;
            const xErrorFormElement =
                document.querySelector(xSelectorName) ||
                document.querySelector(xSelectorId);

            xErrorFormElement.scrollIntoView(false);
            xErrorFormElement.focus();
        }
    }
    render() {
        return <>{this.props.children}</>;
    }
}

export default ErrorFocus;
