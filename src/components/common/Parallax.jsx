import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax({ children, velocity = 50, className = '' }) {
  const { scrollY } = useScroll()
  // map scroll position to a small translateY for parallax effect
  const y = useTransform(scrollY, [0, 1000], [0, -velocity])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
