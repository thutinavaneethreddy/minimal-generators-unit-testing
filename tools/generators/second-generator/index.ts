import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/angular/generators';

export default async function (tree: Tree, schema: { libName: string }) {
  await libraryGenerator(tree, {
    name: schema.libName,
    standaloneConfig: true,
  });

  await formatFiles(tree);
}
