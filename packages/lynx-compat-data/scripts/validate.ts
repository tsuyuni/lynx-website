import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Ajv } from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import compatDataSchema from '../schemas/compat-data.schema.json' assert { type: 'json' };
import platformDataSchema from '../schemas/platform.schema.json' assert { type: 'json' };

const ajv = new Ajv({ allErrors: true });
// We use 'fast' because as a side effect that makes the "uri" format more lax.
// By default the "uri" format rejects ① and similar in URLs.
ajvFormats(ajv, { mode: 'fast' });
// Allow for custom error messages to provide better directions for contributors
ajvErrors(ajv);

ajv.addSchema(platformDataSchema, 'platform-data');
ajv.addSchema(compatDataSchema, 'compat-data');

// Define keywords for schema->TS converter
ajv.addKeyword('tsEnumNames');
ajv.addKeyword('tsName');
ajv.addKeyword('tsType');

const dirname = fileURLToPath(new URL('.', import.meta.url));
const platformDataDir = path.join(dirname, '..', 'platforms');

const DEBUG = process.env.DEBUG === 'ajv';

const validatePlatformData = async () => {
  const files = await fs.readdir(platformDataDir);
  for (const file of files) {
    if (path.extname(file) === '.json') {
      const filePath = path.join(platformDataDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);

      if (!ajv.validate(platformDataSchema, data)) {
        console.error(`Validation failed for ${file}:`);
        console.error(ajv.errors);
      } else if (DEBUG) {
        console.log(`${file} is valid.`);
      }
    }
  }
};

await validatePlatformData();

const validateCompatDataForDir = async (dirName) => {
  const dir = path.join(dirname, '..', dirName);
  const files = await fs.readdir(dir, { recursive: true });

  for (const file of files) {
    if (path.extname(file) === '.json') {
      const filePath = path.join(dir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(content);

      if (!ajv.validate('compat-data', data)) {
        console.error(`Validation failed for ${dirName}/${file}:`);
        console.error(ajv.errors);
      } else if (DEBUG) {
        console.log(`${dirName}/${file} is valid.`);
      }
    }
  }
};

const validateAllCompatData = async () => {
  const dirs = ['lynx-api', 'lynx-native-api', 'css', 'react'];

  for (const dir of dirs) {
    if (DEBUG) {
      console.log(`Validating ${dir} category...`);
    }
    await validateCompatDataForDir(dir);
  }
};

await validateAllCompatData();
