1) install nodejs on pc that has access to the internet
2) if you are behind a proxy ie at work 
	a) create a .npmrc file inside your user directory ie "C:\Users\stiell11"
	b) add the contents below.
		proxy=http://202.175.128.101:80/	proxy:port
		https-proxy=http://202.175.128.101:80/	proxy:port
		strict-ssl=false
	c) add the following keys to the package.json file under: devDependencies
		"imagemin-mozjpeg": "file:/./temp/imagemin-mozjpeg-9.0.0.tgz",
		"mozjpeg": "file:/./temp/mozjpeg-7.1.0.tgz",	
3) if you are not behind a proxy you just need
	"imagemin-mozjpeg": "^9.0.0",
4) open cmd, type "cd " and drag the ztemplate folder into the cmd window. hit enter.
5) type "npm update". hit enter.
6) if you are working behind a proxy and have followed the instructions from step 2 above
	a) copy the file cjpeg.exe from the temp folder to node_modules -> mozjpeg -> vendor
 

	