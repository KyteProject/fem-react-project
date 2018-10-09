import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import pf from 'petfinder-client';

const petFinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    };
  }

  componentDidMount() {
    petFinder.pet
      .find({ output: 'full', location: 'Seattle, WA' })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>
          <u>Adopt Me!</u>
        </h1>
        <pre>
          <div>
            {this.state.pets.map(pet => {
              let breed;

              if (Array.isArray(pet.breeds.breed)) {
                breed = pet.breeds.breed.join(', ');
              } else {
                breed = pet.breeds.breed;
              }

              return (
                <Pet
                  key={pet.id}
                  name={pet.name}
                  breed={breed}
                  animal={pet.animal}
                  media={pet.media}
                  location={`${pet.contact.city}, ${pet.contact.state}`}
                />
              );
            })}
          </div>
        </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
