import { Tree, formatFiles } from '@nrwl/devkit';
import {
  applicationGenerator,
  libraryGenerator,
} from '@nrwl/angular/generators';

export default async function (
  tree: Tree,
  schema: { appName: string; libName: string }
) {
  await applicationGenerator(tree, {
    name: schema.appName,
    standaloneConfig: true,
  });

  await libraryGenerator(tree, {
    name: schema.libName,
    standaloneConfig: true,
  });

  await formatFiles(tree);
}
