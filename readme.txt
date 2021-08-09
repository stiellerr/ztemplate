The steps below assume that you have both nodejs and git installed locally on your pc.
a) if running nodejs behind a proxy ie at work 
	a) create a .npmrc file inside your user directory ie "C:\Users\stiell11"
	b) add the contents below.
		proxy=http://202.175.128.101:80/		format => proxy:port
		https-proxy=http://202.175.128.101:80/	format => proxy:port
		strict-ssl=false
	c) there is a pre configured file in the temp directory, should you wish to use it.
	d) create a .gitconfig file inside your user directory ie "C:\Users\stiell11"
	e) add the contents below.
		[user]
			email = reece@stieller.com
			name = stiellerr
		[http]
			proxy = http://202.175.128.101:80	format => proxy:port
			sslVerify = false
	f) there is a pre configured file in the temp directory, should you wish to use it.
	
1) Create a folder with an appropriate name for your project.
2) Open cmd, type "cd" and drag the folder into the cmd window, hit enter.
3) type "code ." to fire up the directory as a workspace in visual studio code.
4) in the terminal tyoe: "git init" to initialise git
5) type: "git pull https://github.com/stiellerr/ztemplate.git" to retieve the lastest version from the github repo. Note: you will be asked to log in with your GitHub credentials
	Note: if you get a popup that says: The extension 'GitHub' wants to sign in using GitHub. click -> Cancel
		a login box will now appear at the top, middle of the vscode editor. Log in here with you GitHub credentials.
6) type: "npm install" to install all of the project dependencies from the package.json file 
7) if you are behind a proxy ie at work, copy the package.json file from the temp folder and overwrite the file in the root directory.
8) update the 'name' key in your package.json to reflect the name of your project. 
9) type "npm install". hit enter.
10) if you are working behind a proxy and have followed the instructions from step 7 above
	a) copy the file cjpeg.exe from the temp folder to node_modules -> mozjpeg -> vendor.
 

	