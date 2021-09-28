import { Tree } from "@nrwl/devkit"
import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import secondGenerator from ".";

describe('first-generator', () => {
  let tree: Tree;

  beforeEach(async () => {
    tree = await createTreeWithEmptyWorkspace(2);
  });

  it('should create angular app and library', async () => {
    await secondGenerator(tree, {
      libName: 'lib3'
    });

    expect(tree.exists('/libs/lib3/project.json')).toBeTruthy();
  })
})
