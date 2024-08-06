import React from 'react';
import ItemList from './components/ItemList';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import FormValidation from './components/FormValidation';
import Pagination from './components/Pagination';
import RouterComponent from './components/RouterComponent';
import HooksComponent from './components/HooksComponent';
import AuthComponent from './components/AuthComponents';
import ContextComponent from './components/ContextComponent';
import InfiniteScrollComponent from './components/InfiniteScrollComponent';
import SuspenseComponent from './components/SuspenseComponent';
import ErrorBoundary from './components/ErrorBoundary';
import FilterSortComponent from './components/FilterSortComponent';
import MemoComponent from './components/MemoComponent';
import CarouselComponent from './components/CarouselComponent';
import DragDropComponent from './components/DragDropComponent';
import RefComponent from './components/RefComponent';
import TooltipComponent from './components/TooltipComponent';
import VirtualizedListComponent from './components/VirtualizedListComponent';


const App = () => {
  return (
    <div className="App">
      <h1>My React App</h1>
      <ItemList />
      <Counter />
      <FetchData />
      <FormValidation />
      <Pagination items={['APPLE', 'BANANA', 'GRAPES', 'ORANGE', 'MANGO', 'KIWI']} itemsPerPage={2} />
      <RouterComponent />
      <HooksComponent />
      <AuthComponent />
      <ContextComponent />
      <InfiniteScrollComponent />
      <SuspenseComponent />
      <ErrorBoundary />
      <FilterSortComponent />
      <MemoComponent />
      <CarouselComponent items={['Slide 1', 'Slide 2', 'Slide 3']} />
      <DragDropComponent />
      <RefComponent />
      <TooltipComponent />
      <VirtualizedListComponent />

    </div>
  );
};

export default App;
