import { useCallback, useRef, useState } from 'react';

const useLongPress = (
    onLongPress,
    onClick,
    { shouldPreventDefault = true, delay = 300 } = {}
) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timeout = useRef();
    const target = useRef();

    const start = useCallback(
        pEvent => {
            if (shouldPreventDefault && pEvent.target) {
                pEvent.target.addEventListener('touchend', preventDefault, {
                    passive: false
                });

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
            timeout.current && clearTimeout(timeout.current);
            pShouldTriggerClick && !longPressTriggered && onClick();
            setLongPressTriggered(false);

            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener('touchend', preventDefault);
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

const preventDefault = pEvent => {
    if (!isTouchEvent(pEvent)) return;

    if (pEvent.touches.length < 2 && pEvent.preventDefault) {
        pEvent.preventDefault();
    }
};

export default useLongPress;
