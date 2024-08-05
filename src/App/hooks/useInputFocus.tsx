export const useInputFocus = (refElement: HTMLInputElement | null) => {
  if (refElement) {
    refElement.focus();
  }
};
