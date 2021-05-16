import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Analytics from 'analytics'
import amplitudePlugin from '@analytics/amplitude'
import { AnalyticsProvider, useAnalytics } from 'use-analytics'


const analytics = Analytics({
  app: 'awesome-app',
  plugins: [
    amplitudePlugin({
      apiKey: 'API_KEY',
      // See options at https://bit.ly/3dRdZnE
      options: {
        trackingOptions: {
          ip_address: true
        }
      }
    })
  ]
})

ReactDOM.render(
  <React.StrictMode>

  <AnalyticsProvider instance={analytics}>
    <App />
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
