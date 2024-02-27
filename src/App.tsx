import { ImageSlider } from "./ImageSlider";
import nature1 from "./assets/nature-1.jpg";
import nature2 from "./assets/nature-2.jpg";
import nature3 from "./assets/nature-3.jpg";
import nature4 from "./assets/nature-4.jpg";
import nature5 from "./assets/nature-5.jpg";

const imageArr = [
	{ url: nature1, alt: "nature image 1" },
	{ url: nature2, alt: "nature image 2" },
	{ url: nature3, alt: "nature image 3" },
	{ url: nature4, alt: "nature image 4" },
	{ url: nature5, alt: "nature image 5" },
];

function App() {
	return (
		<div
			style={{
				maxWidth: "1200px",
				width: "100%",
				aspectRatio: "10 / 6",
				margin: "0 auto",
			}}
		>
			<ImageSlider images={imageArr} />
			<a href='/' style={{ fontSize: "4rem" }}>
				Link
			</a>
		</div>
	);
}

export default App;
