import Pet from '../Components/Pet';

function Results({ pets }) {
  return (
    <div className="search">
      {pets.length ? (
        pets.map(pet => {
          return (
            <Pet
              name={pet.name}
              animal={pet.name}
              breed={pet.breed}
              key={pet.id}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
            />
          );
        })
      ) : (
        <h1>no pets found</h1>
      )}
    </div>
  );
}
export default Results;
