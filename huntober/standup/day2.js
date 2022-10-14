// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url) {
	url = url
		.toString()
		.replace('https://', '')
		.replace('http://', '')
		.replace('www.', '');
	return url.split('.')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'), 'github');
console.log(domainName('http://www.zombie-bites.com'), 'zombie-bites');
console.log(domainName('https://www.cnet.com'), 'cnet');
