import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8888/api/login';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const data = await response.json();
        console.log('Connexion réussie:', data);
        localStorage.setItem('token', data.token);  // Stockage du token JWT
      } else {
        throw new Error('Échec de la connexion');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <div className="body-background">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ marginTop: '30px', background: 'rgba(255, 255, 255, 0.85)'}}>
              <div className="card-body">
                <h5 className="card-title">Connexion</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={loginData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="password" name="password" value={loginData.password} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Se connecter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
