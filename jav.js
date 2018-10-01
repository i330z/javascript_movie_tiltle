const list = document.querySelector('#books-list ul');
console.log(list);
list.addEventListener('click', function(e) {
	// body...
	// console.log(e)
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		
		list.removeChild(li);
	}
})