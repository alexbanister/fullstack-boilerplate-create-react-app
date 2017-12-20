const raf = global.requestAnimationFrame = (call) => {
  setTimeout(call, 0);
};

export default raf;
