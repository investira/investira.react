import React from 'react';
import { validators } from 'investira.sdk';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    Success,
    Button,
    Icon
} from 'investiraComponents';

// Decorator
const withDialog = (Component, pProps = { wrapContent: true }) => {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    class wrapComponent extends React.Component {
        initialState = {
            isOpen: false,
            title: null,
            content: null,
            actions: [],
            success: false
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

        handleSuccess = () => {
            this.setState({ success: true }, () => {
                setTimeout(() => {
                    this.setState({ success: false });
                    this.handleCloseDialog();
                }, 2000);
            });
        };

        render() {
            const xProps = {
                onOpenDialog: this.handleOpenDialog,
                onCloseDialog: this.handleCloseDialog,
                onSuccess: this.handleSuccess,
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
                        {!validators.isEmpty(title) && (
                            <DialogTitle
                                {...(title.onclose === false
                                    ? {}
                                    : { onClose: this.handleCloseDialog })}>
                                {title.label}
                            </DialogTitle>
                        )}
                        {!validators.isNull(content) &&
                            (pProps.wrapContent ? (
                                <DialogContent>
                                    {success ? (
                                        <Success
                                            width={100}
                                            height={100}
                                            startAnimation
                                        />
                                    ) : (
                                        content
                                    )}
                                </DialogContent>
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
