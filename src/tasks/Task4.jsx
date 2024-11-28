/**
 * User story: As a pet owner I can select the kind of my pet.
 *
 * Constrains:
 * - [ ] You should NOT use any useState in this component.
 * - [ ] You should use the <form> element.
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

import { fakeSend } from "../lib/fake-send";

const petKinds = [
	"Cat",
	"Dog",
	"Cricket",
	"Spider",
	"Rat",
	"Guineapig",
	"Mouse",
];

export default function Task4() {
	const handleSend = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const petName = formData.get("petName") || "";
		const data = { petName };

		fakeSend(data).then(() => {
			console.log(data);
		});
	};

	return (
		<>
			<h2>Task4</h2>
			<form onSubmit={handleSend}>
				<label htmlFor="">
					Select a Pet
					<select name="petName" id="petName">
						<option value="">Pet Name</option>

						{petKinds.map((kind) => (
							<option key={kind} value={kind}>
								{kind}
							</option>
						))}
					</select>
					<button type="submit">Send Pet</button>
				</label>
			</form>
		</>
	);
}
