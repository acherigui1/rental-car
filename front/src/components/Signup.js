import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    plainPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:8888/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    try {
      const response = await fetch(apiUrl, options); 
      if (response.ok) {  
        const data = await response.json();
        console.log('Utilisateur créé:', data);
      } else {
        throw new Error('Quelque chose a mal tourné lors de la création de l’utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la création de l’utilisateur:', error);
    }
  };

  return (
   <div className="body-background">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ marginTop: '30px', background: 'rgba(255, 255, 255, 0.85)'}}>
            <div className="card-body">
              <h5 className="card-title">Inscription</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="nom" name="nom" value={formData.nom} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="plainPassword" className="form-label">Mot de passe</label>
                  <input type="plainPassword" className="form-control" id="plainPassword" name="plainPassword" value={formData.plainPassword} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Rôle</label>
                  <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Sélectionnez un rôle</option>
                    <option value="locataire">Locataire</option>
                    <option value="proprietaire">Propriétaire</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
}

export default Signup;
