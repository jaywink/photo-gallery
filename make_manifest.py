#!/usr/bin/env python3
import json
import os
import sys

manifest = []

for f in os.listdir(sys.argv[1]):
    parts = f.rsplit('.', 1)
    if len(parts) > 1 and parts[1].lower() in ('jpg', 'png'):
        manifest.append({'name': f})

with open(os.path.join(sys.argv[1], 'manifest.json'), 'wb') as manifestf:
    manifestf.write(json.dumps(manifest).encode('utf-8'))
