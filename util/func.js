export const scrollToSomething = (id) => {
    const viewElement = document.getElementById(id);
    if (viewElement) {
        viewElement.scrollIntoView({ behavior: 'smooth' })
    }
}