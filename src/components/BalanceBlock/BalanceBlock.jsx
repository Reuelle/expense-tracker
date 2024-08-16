import React, { useEffect, useRef, useState } from 'react';
import styles from './BalanceBlock.module.css';

const BalanceBlock = () => {
  const [balance] = useState(0); // Remove setBalance if not used
  const blockRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });

  useEffect(() => {
    const updatePosition = () => {
      const block = blockRef.current;
      const parent = block.parentElement;

      if (!block || !parent) return;

      const blockRect = block.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      let newX = position.x + velocity.x;
      let newY = position.y + velocity.y;

      if (newX + blockRect.width > parentRect.width || newX < 0) {
        setVelocity((prev) => ({ x: -prev.x, y: prev.y }));
      }

      if (newY + blockRect.height > parentRect.height || newY < 0) {
        setVelocity((prev) => ({ x: prev.x, y: -prev.y }));
      }

      setPosition({ x: newX, y: newY });
      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(updatePosition);
  }, [position, velocity]);

  return (
    <div className={styles.container}>
      <div
        ref={blockRef}
        className={styles.balanceBlock}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        Balance: ${balance}
      </div>
    </div>
  );
};

export default BalanceBlock;
