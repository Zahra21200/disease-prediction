import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [symptoms, setSymptoms] = useState({
    symptom1: '',
    symptom2: '',
    symptom3: '',
    symptom4: '',
    symptom5: ''
  });
  const [predictions, setPredictions] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const symptomList = Object.values(symptoms).filter(symptom => symptom !== '');
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms: symptomList });
      setPredictions(response.data);
    } catch (error) {
      console.error('There was an error making the request:', error);
    }
  };

  return (
    <div className="App">
      <h1>Disease Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Symptom 1:
          <select value={symptoms.symptom1} onChange={(e) => setSymptoms({ ...symptoms, symptom1: e.target.value })}>
            <option value="">Select</option>
            <option value="back_pain">Back Pain</option>
            <option value="constipation">Constipation</option>
            <option value="abdominal_pain">Abdominal Pain</option>
            {/* Add other symptoms as options */}
          </select>
        </label>
        <br />
        <label>
          Symptom 2:
          <select value={symptoms.symptom2} onChange={(e) => setSymptoms({ ...symptoms, symptom2: e.target.value })}>
            <option value="">Select</option>
            <option value="back_pain">Back Pain</option>
            <option value="constipation">Constipation</option>
            <option value="abdominal_pain">Abdominal Pain</option>
            {/* Add other symptoms as options */}
          </select>
        </label>
        <br />
        <label>
          Symptom 3:
          <select value={symptoms.symptom3} onChange={(e) => setSymptoms({ ...symptoms, symptom3: e.target.value })}>
            <option value="">Select</option>
            <option value="back_pain">Back Pain</option>
            <option value="constipation">Constipation</option>
            <option value="abdominal_pain">Abdominal Pain</option>
            {/* Add other symptoms as options */}
          </select>
        </label>
        <br />
        <label>
          Symptom 4:
          <select value={symptoms.symptom4} onChange={(e) => setSymptoms({ ...symptoms, symptom4: e.target.value })}>
            <option value="">Select</option>
            <option value="mild_fever">mild fever</option>
            <option value="constipation">Constipation</option>
            <option value="abdominal_pain">Abdominal Pain</option>
            {/* Add other symptoms as options */}
          </select>
        </label>
        <br />
        <label>
          Symptom 5:
          <select value={symptoms.symptom5} onChange={(e) => setSymptoms({ ...symptoms, symptom5: e.target.value })}>
            <option value="">Select</option>
            <option value="muscle_weakness">muscle weakness</option>
            <option value="constipation">Constipation</option>
            <option value="abdominal_pain">Abdominal Pain</option>
            {/* Add other symptoms as options */}
          </select>
        </label>
        <br />
        <button type="submit">Predict</button>
      </form>
      {predictions && (
        <div>
          <h2>Predictions</h2>
          <p>Decision Tree: {predictions.DecisionTree}</p>
          <p>Random Forest: {predictions.RandomForest}</p>
          <p>Naive Bayes: {predictions.NaiveBayes}</p>
        </div>
      )}
    </div>
  );
}

export default App;
