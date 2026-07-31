import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const tsc = spawnSync(process.execPath, [path.join(root, 'node_modules', 'typescript', 'bin', 'tsc'), '-b'], {
    cwd: root,
    stdio: 'inherit',
    shell: false,
});

if (tsc.status !== 0) {
    process.exit(tsc.status ?? 1);
}

const vite = spawnSync(process.execPath, [path.join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'build'], {
    cwd: root,
    stdio: 'inherit',
    shell: false,
});

process.exit(vite.status ?? 0);
