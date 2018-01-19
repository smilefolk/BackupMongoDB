#!/bin/bash
$(npm bin)/prettier --single-quote --trailing-comma es5 --write "src/**/*.js"
$(npm bin)/prettier --single-quote --trailing-comma es5 --write "config/**/*.json"
