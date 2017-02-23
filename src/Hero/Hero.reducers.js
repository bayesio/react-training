import ListReducer from './List/List.reducer';
import EditReducer from './Edit/Edit.reducer';

export default new Map([
 ['heroes', ListReducer],
 ['hero', EditReducer]
]);