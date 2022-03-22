document.querySelector("#signup-form .actions ul li:last-child a").onclick =
	function () {
		let submitBtn = document.querySelector(
			"#signup-form .actions ul li:last-child a"
		);
		let patient = {};
		let html = "";
		if (submitBtn.innerHTML.trim().toLowerCase() == "finish") {
			let inputValuesArr = document.querySelectorAll(
				".fieldset-content .form-group input,.fieldset-content .form-date-group input,.fieldset-content .form-group select"
			);
			for (let input of inputValuesArr) {
				let { name, value } = input;
				patient = {
					...patient,
					[name]: value,
				};
			}
			for (let key in patient) {
				html += `
                <tr>
                    <td>
                        ${key}
                    </td>
                    <td>
                        ${patient[key]}
                    </td>
                </tr>
            
            `;
			}
		}
		document.querySelector(".result tbody").innerHTML = html;
	};
