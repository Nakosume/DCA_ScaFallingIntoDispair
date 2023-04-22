export default async function traer_api() {
	try {
			const aniData = await fetch("https://animechan.vercel.app/api/quotes")
          .then((response) => response.json());

			return aniData;

	} catch (error) {
		console.log(error);
	}
}

