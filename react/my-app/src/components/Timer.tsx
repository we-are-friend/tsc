import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [tooltipShown, setTooltopShown] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((curCount) => curCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const tooltipPopperRef = useRef<HTMLDivElement>(null);

  const onMouseOver = useCallback(() => setTooltopShown(true), []);
  const onMouseOut = useCallback(() => setTooltopShown(false), []);

  useEffect(() => {
    console.log('Add event listeners');
    tooltipPopperRef.current?.addEventListener('mouseover', onMouseOver);
    tooltipPopperRef.current?.addEventListener('mouseout', onMouseOut);

    const ref = tooltipPopperRef.current;
    return () => {
      ref?.removeEventListener('mouseover', onMouseOver);
      ref?.removeEventListener('mouseout', onMouseOut);
    };
  }, [onMouseOver, onMouseOut]);

  return (
    <>
      <div>Timer: {count}</div>
      <div ref={tooltipPopperRef}>tooltip popper</div>
      {tooltipShown && <div>Tooltip Tomer: {count}</div>}
    </>
  );
}
