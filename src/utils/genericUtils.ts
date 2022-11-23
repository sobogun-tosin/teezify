export const resizeNavbar = (ref: any) => {
  const resizeNavEle = ref.current;
  const styles = window.getComputedStyle(resizeNavEle);
  let width = parseInt(styles.width, 10);

  let x = 0;

  const onMouseMoveNavRight = (e: MouseEvent) => {
    const dx = e.clientX - x;
    x = e.clientX;
    width = width + dx;
    resizeNavEle.style.width = `${width}px`;
  };

  const onMouseUpNavRight = () => {
    document.removeEventListener("mousemove", onMouseMoveNavRight);
  };

  const onMouseDownNavRight = (e: React.MouseEvent) => {
    x = e.clientX;
    resizeNavEle.style.left = styles.left;
    resizeNavEle.style.right = null;
    document.addEventListener("mousemove", onMouseMoveNavRight);
    document.addEventListener("mouseup", onMouseUpNavRight);
  };

  const resizeRight = ref.current;
  resizeRight.addEventListener("mousedown", onMouseDownNavRight);

  return () => {
    resizeRight.removeEventListener("mousedown", onMouseDownNavRight);
  };
};
