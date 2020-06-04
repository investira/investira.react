import React from 'react';
import { validators } from 'investira.sdk';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    Button,
    Icon
} from 'investiraComponents';

// Decorator
const withDialog = (Component, pProps = { warpContent: true }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    class wrapComponent extends React.Component {
        initialState = {
            isOpen: false,
            title: null,
            content: null,
            actions: []
        };

        state = {
            ...this.initialState
        };

        handleOpenDialog = ({ title, content, actions }) => {
            this.setState({
                isOpen: true,
                title,
                content,
                actions
            });
        };

        handleCloseDialog = () => {
            this.setState({
                ...this.initialState
            });
        };

        render() {
            const xProps = {
                onOpenDialog: this.handleOpenDialog,
                onCloseDialog: this.handleCloseDialog,
                ...this.props
            };

            const { title, content, actions } = this.state;

            if (!validators.isEmpty(actions) && actions.length > 3) {
                console.error('Não adicione mais que 4 actions para o dialog');
            }

            return (
                <>
                    <Component {...xProps} />
                    <Dialog
                        fullWidth
                        open={this.state.isOpen}
                        TransitionComponent={Transition}
                        onClose={this.handleCloseDialog}>
                        {!validators.isNull(title) && (
                            <DialogTitle
                                {...(title.onclose === false
                                    ? {}
                                    : { onClose: this.handleCloseDialog })}>
                                {title.label}
                            </DialogTitle>
                        )}
                        {!validators.isNull(content) &&
                            (pProps.warpContent ? (
                                <DialogContent>{content}</DialogContent>
                            ) : (
                                content
                            ))}

                        {!validators.isEmpty(actions) && (
                            <DialogActions>
                                {actions.map((xAction, xIndex) => {
                                    const xActionProps = {
                                        onClick: xAction.onClick,
                                        color: xAction.color || 'primary',
                                        ...(xAction.startIcon && {
                                            startIcon: (
                                                <Icon
                                                    iconName={xAction.startIcon}
                                                />
                                            )
                                        })
                                    };

                                    return (
                                        <Button key={xIndex} {...xActionProps}>
                                            {xAction.label}
                                        </Button>
                                    );
                                })}
                            </DialogActions>
                        )}
                    </Dialog>
                </>
            );
        }
    }

    return wrapComponent;
};

export default withDialog;
