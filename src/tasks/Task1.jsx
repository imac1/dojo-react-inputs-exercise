/**
 * User story: As a pet owner I can give a name to my pet and I can submit it.
 *
 * Constrains:
 * - [ ] You should use a state variable to control the input.
 * - [ ] You should NOT use the <form> element.
 * 
 * Requirements: 
 *  - [ ] A text input field is presented.
 *  - [ ] The text input field has a label "Pet Name". 
 *  - [ ] If the user clicks to the label, the input field will be focused. 
 *        (The label properly bound to the input.)
 *  - [ ] A button "Send Pet" is exists next to the input field.
 *  - [ ] If a user clicks on it, the {petName: <input value>} data will be send
 *        with the fakeSend method (see below). When the sending is complete, the
 *        data is logged to the console.
 * 
 * fakeSend: Simulate a delay of a network operation. It returns a Promise,
 *  which always fulfilled with the original data.
 * 
 *  Syntax: fakeSend(data: any): Promise<any>
 *  Example: fakeSend({title: 'Eloquent Javascript', pages: 45})
 *              .then((data) => console.log(data))
 */

import { useState } from 'react';
import { fakeSend } from '../lib/fake-send';


export default function Task1() {

  const [petName, setPetName] = useState('')

  return (
    <>
    
      <h2>Task1</h2>
      <label>Pet name: 
      <input value={petName}
      onChange={e => setPetName(e.target.value)}
      
      />
      </label>
      <p>your pet name is {petName}</p>
      
      
    </>
  );
}
