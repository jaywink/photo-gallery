#!/usr/bin/env python3
import json
import os

manifest = []

for f in os.listdir('images/'):
    parts = f.rsplit('.', 1)
    if len(parts) > 1 and parts[1].lower() in ('jpg', 'png'):
        manifest.append({'name': f})

with open(os.path.join('images', 'manifest.json'), 'wb') as manifestf:
    manifestf.write(json.dumps(manifest).encode('utf-8'))
