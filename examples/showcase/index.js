for (let i = 0; i < 9; i ++) {
	var portal = document.getElementById(i);
	let x = 6 * Math.sin(i * 40);
	let z = 6 * Math.cos(i * 40);
	let position = x + ' 0 ' + z;
	portal.setAttribute('position', position);
	// portal.setAttribute('rotation', '0 ' + (i * 40) + ' 0' )
};