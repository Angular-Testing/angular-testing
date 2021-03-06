import { Task } from '@ab/data/models/task.model';
import { PROJECTS_VIEWS } from 'tests/assets/projects-views';
import { TASKS } from 'tests/assets/tasks';
import { updateProjectViewWithTasks } from './home.logic';
import { ProjectView } from './models/project-view.model';

fdescribe('GIVEN a list of projects and a list of related tasks', () => {
  let inputProjectsViews: ProjectView[];
  let inputTasks: Task[];
  beforeEach(() => {
    inputProjectsViews = PROJECTS_VIEWS;
    inputTasks = TASKS;
  });
  describe('WHEN we call the updateProjectTasks function for a specific project', () => {
    let actual: ProjectView | undefined;
    beforeEach(() => {
      const inputProjectView = inputProjectsViews[0];
      actual = updateProjectViewWithTasks(inputProjectView, inputTasks);
    });
    it('THEN should update the project summary', () => {
      const expected = { pendingTasks: 1, completedTasks: 2 };
      expect(actual?.pendingTasks).toEqual(expected.pendingTasks);
      expect(actual?.completedTasks).toEqual(expected.completedTasks);
    });
  });
});
