import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { validators } from 'investira.sdk';

import { CenterInView } from '../template';
import { Typography } from 'investiraComponents';

import Style from './ContentList.module.scss';

class ContentList extends PureComponent {
    validateData = () => {};

    hasListData = pList => {
        return validators.isEmpty(pList);
    };

    isDataValid = pList => {
        if (this.hasListData(pList) && validators.isArray(pList)) {
            return !validators.isNull(pList[0].id);
        } else {
            return false;
        }
    };

    render() {
        const xClassRoot = classNames(Style.root, this.props.className, {
            [Style.emptyList]: this.hasListData(this.props.list)
        });
        const Component = this.props.item;

        const { keyName, ...othersItemProps } = this.props.itemProps;

        if (validators.isNull(this.props.item)) {
            return (
                <CenterInView>
                    <Typography
                        variant={'body2'}
                        align={'center'}
                        color={'textSecondary'}>
                        Propriedade <b>item</b> está indefinida. É necessário
                        que um componente seja atribuido.
                    </Typography>
                </CenterInView>
            );
        }

        return (
            <div className={xClassRoot}>
                {this.hasListData(this.props.list) ? (
                    <CenterInView>
                        <Typography
                            variant={'body2'}
                            align={'center'}
                            color={'textSecondary'}>
                            {this.props.emptyMessage || 'Lista está vazia'}
                        </Typography>
                    </CenterInView>
                ) : this.isDataValid(this.props.list) ? (
                    <CenterInView>
                        <Typography
                            variant={'body2'}
                            align={'center'}
                            color={'textSecondary'}>
                            É necessário haver um id único
                        </Typography>
                    </CenterInView>
                ) : (
                    <TransitionGroup
                        className={Style.list}
                        appear={true}
                        enter={true}
                        exit={true}>
                        {Object.values(this.props.list).map((xItem, xIndex) => {
                            return (
                                <CSSTransition
                                    key={xItem[keyName] || xIndex}
                                    in={true}
                                    timeout={500}
                                    classNames={Style}
                                    unmountOnExit
                                    appear
                                    onEnter={this.props.onEnter}
                                    onExited={this.props.onExited}>
                                    <Component
                                        data={xItem}
                                        {...othersItemProps}
                                    />
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                )}
            </div>
        );
    }
}

ContentList.propTypes = {
    list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    emptyMessage: PropTypes.string,
    item: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    className: PropTypes.object,
    itemProps: PropTypes.object,
    onEnter: PropTypes.func,
    onExited: PropTypes.func
};

export default ContentList;
