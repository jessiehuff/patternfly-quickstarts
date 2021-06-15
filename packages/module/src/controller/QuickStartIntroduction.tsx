import * as React from 'react';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import TaskHeader from './QuickStartTaskHeader';

type QuickStartIntroductionProps = {
  introduction: string;
  tasks: QuickStartTask[];
  allTaskStatuses: QuickStartTaskStatus[];
  onTaskSelect: (selectedTaskNumber: number) => void;
};

const QuickStartIntroduction: React.FC<QuickStartIntroductionProps> = ({
  tasks,
  introduction,
  allTaskStatuses,
  onTaskSelect,
}) => {
  const { text } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <>
      <QuickStartMarkdownView content={introduction} />
      <p style={{ marginBottom: 'var(--pf-global--spacer--md)' }}>
        {text['In this quick start, you will complete {{count, number}} task'].replace('{{count, number}} ', tasks.length)}
        :
      </p>
      {tasks.map((task, index) => (
        <TaskHeader
          key={task.title}
          title={task.title}
          taskIndex={index + 1}
          size="md"
          taskStatus={allTaskStatuses[index]}
          onTaskSelect={onTaskSelect}
        />
      ))}
    </>
  );
};

export default QuickStartIntroduction;
