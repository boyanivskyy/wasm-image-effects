async function init() {
	let ruspApp = null;

	try {
		ruspApp = await import("../pkg");
	} catch (e) {
		throw new Error("Failed to import ruspApp", e);
	}

	const input = document.getElementById("upload");
	const fileReader = new FileReader();

	fileReader.onload = function () {
		const base64 = fileReader.result.replace(
			/^data:image\/(png|jpg|jpeg);base64,/,
			""
		);

		const imageDataUrl = ruspApp.grayscale(base64);
		document.getElementById("new-img").setAttribute("src", imageDataUrl);
	};

	input.addEventListener("change", function () {
		fileReader.readAsDataURL(input.files[0]);
	});
}

init();
