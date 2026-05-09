// Tree-shaken framer-motion exports.
// Use `m.*` instead of `motion.*` and wrap the app in <LazyMotion features={domAnimation}>.
// Saves ~50KB by avoiding the full motion bundle.
export { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
