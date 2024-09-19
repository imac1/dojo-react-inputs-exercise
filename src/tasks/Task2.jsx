/**
 * User story: As a pet owner I can give a name to my pet and I can submit it.
 * 
 * Constrains:
 * - [ ] You should NOT use any useState in this component.
 * - [ ] You should use the <form> element.
 * 
 * Requirements: 
 *  - [ ] A text input field is present.
 *  - [ ] The text input field has a label "Pet Name". 
 *  - [ ] If the user clicks to the label, the input field will be focused. 
 *        (The label properly bound to the input.)
 *  - [ ] A button "Send Pet" is exists next to the input field.
 *  - [ ] If a user clicks on it, the {petName: <input value>} data will be send
 *        with the fakeSend method. When the sending is complete, the
 *        data is logged to the console.
 * 
 * Tips:
 * - https://react.dev/reference/react-dom/components/input#providing-a-label-for-an-input
 * - https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
 */

import { fakeSend } from '../lib/fake-send';

export default function Task2() {
  const handleSend = (event) => {
    event.preventDefault(); 
    const petName = event.target.petName.value; 
    fakeSend({ petName }) 
      .then((data) => console.log(data.petName)) 
      .catch((error) => console.error('Error:', error)); 
  };


  return (
    <>
      <h2>Task2</h2>
      <form onSubmit={handleSend}>
      <label htmlFor="petName" >Pet Name</label>
      <input type="text" id='petName' name='petName' />
      <button type='submit'>Send Pet</button>
      </form>
    </>
  );
}
