const modalBtn = document.querySelectorAll('[data-modal]');
const modal = document.querySelectorAll('.modal');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');

const closeModal = (modal) => {
    let modalContent = modal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(()=>{
        modal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200)
};

modalBtn.forEach(item => {
    item.addEventListener('click', e => {
        let event = e.currentTarget;
        let modalId = event.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');
        
        modalContent.addEventListener('click', e => {
            e.stopPropagation();
        })

        modal.classList.add('show');
        body.classList.add('no-scroll');
        
        setTimeout(()=>{
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 0.5)
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', e => {
        let currentModal = e.currentTarget.parentNode.parentNode;
        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', e => {
        let currentModal = e.currentTarget;
        closeModal(currentModal);
    });
});