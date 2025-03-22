import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store';
import { Provider } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { RecoilRoot } from 'recoil'
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-n6bec8lqeucg0lhw.us.auth0.com";
const clientId = "nSfu0E0cn65ti17L9166mlT2SGP0LsRg";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <Provider store={store}>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{ redirect_uri: window.location.origin }}
        >
          <App />
        </Auth0Provider>
        <Toaster position="top-right" />
      </Provider>
    </RecoilRoot>
  </StrictMode>,
)
