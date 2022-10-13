// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

const domainName = (url) => {
	let comFree = url.replace('.com', '');
	let wwwFree = comFree.replace('www.', '');
	return wwwFree.split('/')[2];
};

console.log(domainName('http://github.com/carbonfive/raygun'), 'github');
console.log(domainName('http://www.zombie-bites.com'), 'zombie-bites');
console.log(domainName('https://www.cnet.com'), 'cnet');
