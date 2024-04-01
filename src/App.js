import './App.css';
import {useState} from 'react';

function App() {
  const [dictionary, setDictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }]);

    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');

    const handleSearch = ()=>{
      if(word){
        
        let [result] = dictionary.filter((pair)=>pair.word.toLowerCase()===word.toLocaleLowerCase());
       
        if(result)
          setMeaning(result.meaning);
        else
          setMeaning('Word not found in the dictionary.');
      }
    }

  return (
    <div className="App">
     <h1>Dictionary App</h1>
     <input type='text' placeholder='Search for a word...' value={word} onChange={(e)=>{setWord(e.target.value)}}/>
     <button type='button' onClick={handleSearch}>Search</button>
     <h3>Definition:</h3>
     <p>{meaning}</p>  
    </div>
  );
}

export default App;
