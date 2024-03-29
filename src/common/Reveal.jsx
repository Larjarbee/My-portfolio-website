import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const minControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      minControls.start('visible');
    }
  }, [isInView, minControls]);

  return (
    <div ref={ref} className='relative w-full overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={minControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
