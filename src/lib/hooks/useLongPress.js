import { useCallback, useRef, useState, useEffect } from 'react';
import { validators } from 'investira.sdk';

const useLongPress = (
    onLongPress,
    onClick,
    { shouldPreventDefault = true, delay = 300, listenElemOnScroll = null } = {}
) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);

    const timeout = useRef();
    const target = useRef();
    const scrollElem = useRef(null);

    useEffect(() => {
        if (
            validators.isNull(scrollElem.current) &&
            !validators.isNull(listenElemOnScroll)
        ) {
            const xScroll = document.getElementById(listenElemOnScroll);
            scrollElem.current = xScroll;

            xScroll.addEventListener(
                'scroll',
                e => {
                    timeout.current && clearTimeout(timeout.current);
                },
                {
                    passive: false
                }
            );
        }
    }, []);

    const start = useCallback(
        pEvent => {
            if (shouldPreventDefault && pEvent.target) {
                pEvent.target.addEventListener(
                    'touchend',
                    e => preventDefault(e, setIsScrolling),
                    {
                        passive: false
                    }
                );

                target.current = pEvent.target;
            }

            timeout.current = setTimeout(() => {
                onLongPress(pEvent);
                setLongPressTriggered(true);
            }, delay);
        },
        [onLongPress, delay, shouldPreventDefault]
    );

    const clear = useCallback(
        (pEvent, pShouldTriggerClick = true) => {
            console.log(pEvent.type);
            timeout.current && clearTimeout(timeout.current);
            pShouldTriggerClick && !longPressTriggered && onClick();
            setLongPressTriggered(false);

            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener('touchend', e =>
                    preventDefault(e, setIsScrolling)
                );
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered]
    );

    return {
        onMouseDown: pEvent => start(pEvent),
        onTouchStart: pEvent => start(pEvent),
        onMouseUp: pEvent => clear(pEvent),
        onMouseLeave: pEvent => clear(pEvent, false),
        onTouchEnd: pEvent => clear(pEvent)
    };
};

const isTouchEvent = pEvent => {
    return 'touches' in pEvent;
};

const preventDefault = (pEvent, pAction) => {
    if (!pEvent.cancelable) {
        return;
    }

    if (!isTouchEvent(pEvent)) return;

    if (pEvent.touches.length < 2 && pEvent.preventDefault) {
        pEvent.preventDefault();
    }
};

export default useLongPress;
