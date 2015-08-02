WELCOME=\033[37m🌊🌊🌊🌊🌊🌊🌊🌊🌊 At the Drive-In 🌊🌊🌊🌊🌊🌊🌊🌊🌊\033[39m

all: hello npm-global npm server

install: hello npm-global npm

dev: hello server

hello:
	@echo "\n${WELCOME}\n"

npm-global:
	@npm install -g babel

npm:
	@npm install

server:
	@babel-node server.js
