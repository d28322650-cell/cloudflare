import type React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection(props: React.ComponentProps<'section'>) {
  const { children, className, style, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <motion.section
      className={className}
      style={style}
      {...(rest as any)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
