#!/bin/bash
set -e
curl -fsSL https://deno.land/install.sh | sh
/opt/buildhome/.deno/bin/deno task lume