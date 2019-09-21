import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner'


function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();
   return (
    promiseInProgress &&
      <div className="loading-indicator">
          <Loader type="ThreeDots" color="#2BAD60" height={100} width={100} />
      </div>
   );
 }

 export default LoadingIndicator;