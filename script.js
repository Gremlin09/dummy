const clik= document.querySelector('#open');
const cross= document.querySelector('#close');
const cont=document.querySelector('.container');
clik.addEventListener('click',()=>{
	cont.classList.add('shownav');
});
cross.addEventListener('click',()=>{
	cont.classList.remove('shownav');
});ss