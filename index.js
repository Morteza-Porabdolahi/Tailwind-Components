// let dropDown = document.getElementById('toggleDropdown');
// let icon = document.getElementById('chevronIcon');
// let openMenuBar = document.getElementById('openMenu');
// let closeMenuBar = document.getElementById('closeMenu');
// let showSearchBar = document.getElementById('showSearch');
// showSearchBar.addEventListener('click', e => {
//     let input = showSearchBar.parentElement.nextElementSibling;
//     if(input.classList.contains('hidden')){
//         input.classList.remove('hidden');
//     }else{
//         input.classList.add('hidden');
//     }
// });
// openMenuBar.addEventListener('click', e => {
//     let menu = openMenuBar.parentElement.parentElement.nextElementSibling.nextElementSibling;
//     menu.classList.remove('hidden');
// });
// closeMenuBar.addEventListener('click' , e => {
//     let menu = closeMenuBar.parentElement.parentElement.parentElement;
//     menu.classList.add('hidden');
// });
// dropDown.addEventListener('click', e => {
//     let Target = dropDown.nextElementSibling;
//     if (Target.classList.contains('flex')) {
//         Target.classList.remove('flex');
//         Target.classList.add('hidden');
//         icon.innerHTML = ` <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />`;
//         icon.classList = 'h-5 w-5';
//     } else {
//         Target.classList.remove('hidden');
//         Target.classList.add('flex');
//         icon.innerHTML = `<path fill-rule="evenodd"
//         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//         clip-rule="evenodd" />`;
//         icon.classList = 'h-5 w-5 animate-bounce';
//     }
// });
// let Buttons = document.getElementsByClassName('btn');
// Array.from(Buttons).forEach(elem => {
//     elem.addEventListener('click' , e => {
//         let clickedButton = e.target.innerHTML;
//         let getTexts = document.getElementsByClassName('text');
//         Array.from(getTexts).forEach(elem => {
//             elem.classList.add('hidden');
//         });
//         getTexts[clickedButton - 1].classList.remove('hidden');
//     });
// });

const btns = document.getElementsByClassName('buttons');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const socialMedia = document.getElementById('social');
Array.from(btns).forEach(elem => {
    elem.addEventListener('click', e => {
        for(let i = 0 ; i < btns.length ; i++ ){
            btns[i].classList.remove('active');
        }
        e.target.classList.add('active');
        if(e.target.innerHTML == 'Register'){
            socialMedia.classList.add('hidden');
            registerForm.classList.remove('hidden');
            registerForm.classList.add('flex');
            loginForm.classList.add('hidden');
        }
        if(e.target.innerHTML == 'Login'){
            socialMedia.classList.remove('hidden');
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }
    }); 
});
const pageButtons = document.getElementsByTagName('button');
Array.from(pageButtons).forEach(buttons => {
    if(buttons.dataset.modal !== undefined){
        buttons.addEventListener('click', e => {
            let modalData= buttons.dataset.modal;
            let modal = document.querySelector(modalData);
            modal.classList.add('flex')
            modal.classList.remove('hidden')
        }); 
    }
});
const closeModals = document.getElementsByClassName('modal');
const closeModalBtns = document.getElementsByClassName('closeModal');
for(let i = 0 ; i<closeModals.length ; i++){
    closeModals[i].addEventListener('click', e => {
        if(e.target.classList.contains('modal')){
            e.target.classList.add('hidden');
            e.target.classList.remove('flex');
        }
    });
    closeModalBtns[i].addEventListener('click', e=> {
        let Modal = e.target.parentElement.parentElement.parentElement.parentElement;
        Modal.classList.add('hidden');
        Modal.classList.remove('flex');
    });
}