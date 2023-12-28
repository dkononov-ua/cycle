
async function sss(){
	console.log('https://sky.syrykh.com:8000/login/first')
	await fetch('https://sky.syrykh.com:8000/login/first')
	console.log(111111)
	setTimeout(sss, 3600000)
}

sss()


