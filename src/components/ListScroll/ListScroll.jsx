import React, { memo } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroller from '../InfiniteScroller';
import ContentList from '../ContentList';

import Style from './ListScroll.module.scss';

const ListScroll = memo(props => {
    const { onNextPage, nextPage, list, item, emptyMessage, itemProps } = props;
    console.log(itemProps);
    return (
        <InfiniteScroller onNextPage={onNextPage} nextPage={nextPage}>
            <ContentList
                list={list}
                item={item}
                emptyMessage={emptyMessage}
                itemProps={itemProps}
            />
        </InfiniteScroller>
    );
});

ListScroll.propTypes = {
    list: PropTypes.array.isRequired,
    emptyMessage: PropTypes.string,
    item: PropTypes.oneOfType([
        PropTypes.elementType,
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    className: PropTypes.object,
    itemProps: PropTypes.object
    //onEnter: PropTypes.func,
    //onExited: PropTypes.func
};

ListScroll.defaultProps = {
    itemProps: {},
    list: []
};

export default ListScroll;
