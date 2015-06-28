WELCOME=\033[37m🌊🌊🌊🌊🌊🌊🌊🌊🌊 At the Drive-In 🌊🌊🌊🌊🌊🌊🌊🌊🌊\033[39m

all: hello npm-global jspm npm server browser

hello:
	@echo "\n${WELCOME}\n"

npm-global:
	@npm install -g http-server jspm@beta babel

jspm:
	@jspm install

npm:
	@npm install

server:
	@babel-node server.js

browser:
	@browser-sync start --files "*.js" --server
