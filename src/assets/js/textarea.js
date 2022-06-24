const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    let textAreaHeight = item.offsetHeight;
    item.addEventListener('input', e => {
        let elem = e.currentTarget;

        elem.style.height = textAreaHeight;
        elem.style.height = elem.scrollHeight + 'px';
    });
});