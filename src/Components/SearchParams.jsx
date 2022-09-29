import { useState, useEffect } from 'react';
import useBreedList from '../Hooks/useBreedList';

import Results from './Results';

const ANIMALS = ['dog', 'cat', 'rabbit', 'bird', 'reptile'];

function SearchParams() {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            value={location}
            id="location "
            placeholder="Location"
            onChange={e => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => {
              setAnimal(e.target.value);
              setBreed('');
            }}
            onBlur={e => {
              setAnimal(e.target.value);
              setBreed('');
            }}
          >
            <option />
            {ANIMALS.map(animal => {
              return (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => {
              setBreed(e.target.value);
            }}
            onBlur={e => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map(breed => {
              return (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
