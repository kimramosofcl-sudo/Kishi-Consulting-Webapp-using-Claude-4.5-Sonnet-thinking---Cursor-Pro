export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const target = document.querySelector(sectionId);
  if (target) {
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

