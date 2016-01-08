BUILD        = ./build
NODE_MODULES = ./node_modules
TYPINGS      = ./typings
NPM_BIN      = $(shell npm bin)

.PHONY: clean reinstall test uninstall

all: $(BUILD)

$(NODE_MODULES):
	npm install

$(TYPINGS): $(NODE_MODULES)
	$(NPM_BIN)/tsd install

$(BUILD): $(NODE_MODULES) $(TYPINGS) clean
	$(NPM_BIN)/webpack --bail

clean:
	rm -rf $(BUILD)

test: $(BUILD)
	$(NPM_BIN)/karma start

uninstall: clean
	rm -rf $(NODE_MODULES)
	rm -rf $(TYPINGS)

reinstall: uninstall $(NODE_MODULES) $(TYPINGS)
