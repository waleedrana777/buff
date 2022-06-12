import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Provider } from 'react-redux';
import { store } from '../redux/store';


function MyApp({ Component, pageProps }) {
	return (
		<div>
			<div className='bg-buff-darkerBackground min-h-screen text-bufftext-200'>
				<Navbar />
				<div className=''>
					<Provider store={store}>
						<Component {...pageProps} />
					</Provider>
				</div>
				<footer className='footer bottom-0 bg-buff-background w-full h-16'>Copyright &#169;</footer>
			</div>
		</div>
	);
}

export default MyApp;
