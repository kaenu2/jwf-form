import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { App } from './components';

import './index.css';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
