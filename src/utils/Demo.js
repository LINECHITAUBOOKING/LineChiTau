import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useJwtCsrfToken } from './csrf-hook/useJwtCsrfToken';

function Demo() {
  const [fetchError, setFetchError] = useState('');

  const {
    csrfToken,
    jwtToken,
    jwtDecodedData,
    init,
    login,
    logout,
    getNewAccessToken,
    auth,
  } = useJwtCsrfToken();

  // const { spinner, setLoading } = useSpinner(1300);

  init(axios);

  return (
    <>
      <section style={{ marginBottom: '10px' }}>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
        {console.log(auth)}
      </section>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => login({ username: 'eddy', password: '33333' })}>
          login
        </button>
        {console.log(auth)}
      </section>
      <section style={{ marginBottom: '10px' }}>
        <h2>Debug</h2>
        <p>CSRF Token: {csrfToken}</p>
        <p style={{ wordWrap: 'break-word', width: '500px' }}>
          Access Token: {jwtToken}
        </p>
        <p>Token Decoded Data: {Object.entries(jwtDecodedData).join(' ')}</p>
      </section>
    </>
  );
}

export default Demo;
