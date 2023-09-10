export const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
};
