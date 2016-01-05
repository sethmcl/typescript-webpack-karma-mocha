BUILD        = ./build
NODE_MODULES = ./node_modules
NPM_BIN      = $(shell npm bin)

.PHONY: clean install test uninstall

all: build

$(NODE_MODULES):
	npm install

$(BUILD): $(NODE_MODULES) clean
	$(NPM_BIN)/webpack --bail

clean:
	rm -rf $(BUILD)

install: $(NODE_MODULES) shrinkwrap


test: $(BUILD)
	$(NPM_BIN)/karma start

uninstall: clean
	rm -rf $(NODE_MODULES)
