import '../scss/main.scss'

export function example() {

	let path = document.querySelector('path');
	let pathLength = path.getTotalLength();

	path.style.strokeDasharray = pathLength + ' ' + pathLength;

	path.style.strokeDashoffset = pathLength;

	window.addEventListener('scroll',()=>{

		//what % down is it?
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		//length to offset the dashes
		var drawLength = pathLength * scrollPercentage;
		path.style.strokeDashoffset = pathLength - drawLength;

	})
}


export function hello(name) {
	return name;
}


