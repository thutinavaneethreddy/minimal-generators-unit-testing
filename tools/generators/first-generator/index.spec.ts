import { Tree } from "@nrwl/devkit"
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import firstGenerator from ".";

describe('first-generator', () => {
  let tree: Tree;

  beforeEach(async () => {
    tree = await createTreeWithEmptyWorkspace(2);
  });

  it('should create angular app and library', async () => {
    await firstGenerator(tree, {
      appName: 'app3',
      libName: 'lib3'
    });

    expect(tree.exists('/apps/app3/project.json')).toBeTruthy();
    expect(tree.exists('/libs/lib3/project.json')).toBeTruthy();
  })
})
