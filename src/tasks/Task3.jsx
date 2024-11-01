/**
 * User story: As a pet owner I can select the kind of my pet.
 * 
 * Constrains:
 * - [ ] You should use a state variable to control the input.
 * - [ ] You should NOT use the <form> element.
 * - [ ] The component should use the petKinds array to display the possible options.
 *
 * Requirements: 
 *  - [ ] A select input field is presented.
 *  - [ ] The select input field has a label "Pet Name". 
 *  - [ ] If the user clicks to the label, the select field will be focused. 
 *        (The label properly bound to the input.)
 *  - [ ] A button "Send Pet" is exists next to the input field.
 *  - [ ] If a user clicks on it, the {petName: <input value>} data will be send
 *        with the fakeSend method. When the sending is complete, the
 *        data is logged to the console.
 *  - [ ] A "Select your pet" option should be displayed by default. If this is selected,
 *        an empty string should be sent as a pet name.
 */

import { fakeSend } from '../lib/fake-send';
import { useState } from 'react';

const petKinds = [
  'Cat',
  'Dog',
  'Cricket',
  'Spider',
  'Rat',
  'Guineapig',
  'Mouse'
]


export default function Task3() {

  const [petName, setPetName] = useState('')

const handlePetChange = (event) => {
  const newPetName = event.target.value;
  setPetName(newPetName)
  fakeSend({ petName: newPetName }) 
  .then((data) => console.log(data.petName)) 
  .catch((error) => console.error('Error:', error)); 

}



  return (
    <>
      <h2>Task3</h2>
      <label htmlFor="petName">Pet Name
        <select name="petKinds" id="petKinds"   onChange={handlePetChange} value={petName}>
          <option  key="default" value="">Select Pet</option>
          {petKinds.map((kind) => <option key={kind} value={kind} >{kind}</option>)}

        </select>
      </label>
    </>
  );
}
