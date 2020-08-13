import React, { memo, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Slide,
    CrudContext,
    DeckContext,
    Icon,
    Button,
    Typography,
    DialogContentText,
    CenterInView
} from '..';

import Style from './Crud.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Crud = memo(
    Object.assign(
        props => {
            const initialStateDialog = {
                isOpen: false,
                title: null,
                content: null,
                actions: []
            };

            const [deleted, setDeleted] = useState(false);
            const [editable, setEditable] = useState(false);
            const [dialog, setDialog] = useState(initialStateDialog);

            const crudContext = useContext(CrudContext);
            const deckContext = useContext(DeckContext);

            const { onNextView, onPrevView, prevView } = deckContext;

            const onConfirmDelete = () => {
                const { itemData, onDelete } = crudContext;

                if (deckContext) {
                    onDelete(
                        itemData,
                        () => {
                            props.onCloseDialog();
                            setDeleted(true);
                            setTimeout(() => {
                                onPrevView();
                            }, 300);
                        },
                        () => console.log('delete error')
                    );
                } else {
                    onDelete(itemData, props.onCloseDialog, () => {
                        props.onCloseDialog();
                        setDeleted(true);
                    });
                }
            };

            const onConfirmCreate = (pData, pActions) => {
                crudContext.onCreate(pData, {
                    ...pActions,
                    onNextView,
                    onPrevView,
                    prevView
                });
            };

            const onConfirmUpdate = (pData, pActions) => {
                crudContext.onUpdate(pData, {
                    ...pActions,
                    onNextView,
                    onPrevView,
                    prevView
                });
            };

            const handleOpenDialog = ({ title, content, actions }) => {
                setDialog({
                    isOpen: true,
                    title,
                    content,
                    actions
                });
            };

            const handleCloseDialog = () => {
                setDialog({
                    ...initialStateDialog
                });
            };

            const handleDeleteDialog = () => {
                handleOpenDialog({
                    title: {
                        label: 'Está certo disto?',
                        onclose: true
                    },
                    content: (
                        <DialogContentText>
                            {props.deleteMessage ||
                                'Este item será excluído permanentemente.'}
                        </DialogContentText>
                    ),
                    actions: [
                        {
                            label: 'Confirmar',
                            onClick: onConfirmDelete
                        }
                    ]
                });
            };

            const handleEdit = () => {
                setEditable(!editable);
            };

            const childrenWithProps = React.Children.map(
                props.children,
                child => {
                    if (React.isValidElement(child)) {
                        const { children, ...otherProps } = props;
                        const { itemData } = crudContext;
                        return React.cloneElement(child, {
                            itemData,
                            onConfirmDelete,
                            onConfirmCreate,
                            onConfirmUpdate,
                            ...otherProps
                        });
                    }
                    console.error('CRUD: Componente filho inválido');
                    return null;
                }
            );

            const editWithProps = () => {
                const Component = props.editFormComponent;
                const { itemData } = crudContext;
                const xProps = {
                    initialValues: itemData,
                    onConfirmUpdate,
                    onCancelUpdate: handleEdit
                };
                if (props.editFormComponent) {
                    return <Component {...xProps} />;
                }
                console.error('CRUD: Componente edit inválido');
                return null;
            };

            //Reinicia estado do crud caso a navegação do tipo deck reinicie
            useEffect(() => {
                if (validators.isEmpty(prevView)) {
                    setEditable(false);
                    setDeleted(false);
                }
            }, [prevView]);

            return (
                <>
                    <div className={Style.root}>
                        {deleted ? (
                            <main className={Style.main}>
                                <CenterInView>
                                    <Typography
                                        align={'center'}
                                        color={'textSecondary'}
                                        component={'p'}
                                        variant={'caption'}>
                                        Excluído com sucesso
                                    </Typography>
                                </CenterInView>
                            </main>
                        ) : (
                            <>
                                <main className={Style.main}>
                                    {editable
                                        ? editWithProps()
                                        : childrenWithProps}
                                </main>

                                {props.showActions && (
                                    <nav className={Style.nav}>
                                        {crudContext.onDelete && !editable && (
                                            <Button
                                                onClick={handleDeleteDialog}
                                                startIcon={
                                                    <Icon
                                                        iconName={'delete'}
                                                        color={'primary'}
                                                        size={22}
                                                    />
                                                }
                                                color={'primary'}
                                                variant={'text'}>
                                                Excluir
                                            </Button>
                                        )}

                                        {crudContext.onUpdate && !editable && (
                                            <Button
                                                onClick={handleEdit}
                                                startIcon={
                                                    <Icon
                                                        iconName={
                                                            editable
                                                                ? 'cancel'
                                                                : 'edit'
                                                        }
                                                        color={'primary'}
                                                        size={22}
                                                    />
                                                }
                                                color={'primary'}
                                                variant={'outlined'}>
                                                {'Editar'}
                                            </Button>
                                        )}
                                    </nav>
                                )}
                            </>
                        )}
                    </div>

                    <Dialog
                        fullWidth
                        open={dialog.isOpen}
                        TransitionComponent={Transition}
                        onClose={handleCloseDialog}>
                        {!validators.isEmpty(dialog.title) && (
                            <DialogTitle
                                {...(dialog.title.onclose === false
                                    ? {}
                                    : { onClose: handleCloseDialog })}>
                                {dialog.title.label}
                            </DialogTitle>
                        )}
                        {!validators.isNull(dialog.content) && (
                            <DialogContent>{dialog.content}</DialogContent>
                        )}

                        {!validators.isEmpty(dialog.actions) && (
                            <DialogActions>
                                {dialog.actions.map((xAction, xIndex) => {
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
        },
        { displayName: 'Crud' }
    )
);

Crud.propTypes = {
    mode: PropTypes.string,
    showActions: PropTypes.bool
};

Crud.defaultProps = {
    showActions: true
};

export default Crud;
