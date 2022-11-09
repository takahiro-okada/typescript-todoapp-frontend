/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InCompleteTodos from '../molecules/InCompleteTodos';
import CompleteTodos from '../molecules/CompleteTodos';


const TodoList = () => (
    <div className="container mx-auto flex justify-between items-center">
      <div className="mt-10 w-full bg-neutral-800 pb-16 rounded-lg">
        <Tabs  selectedTabClassName=" bg-orange-600 bg-gradient-to-r from-[#FF512F] to-[#F09819]">
          <TabList className="flex">
            <Tab className="rounded-tl-md text-white bg-gray-500 w-6/12 text-center py-3 text-xl ">
              Your Todos
            </Tab>
            <Tab className="rounded-tr-md text-white bg-gray-500 text-xl w-6/12 text-center py-3">Done Todos</Tab>
            
          </TabList>
          
          <TabPanel>
            <InCompleteTodos/>
          </TabPanel>

          <TabPanel>
            <CompleteTodos/>
          </TabPanel>

        </Tabs>
      </div>
    </div>
  );

export default TodoList;
