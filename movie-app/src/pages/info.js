import React from "react";
import Navbar from "../components/Navbar";
import { Route, useParams } from "react-router-dom";

const Info = () => {
	let { imageUrl, title, rating, date, description } = useParams();
	// console.log('Params:', imageUrl, title, rating, date, description);

	return (
		<div>
			<Navbar />
			<div className="h-max flex flex-col py-16 z-10">
				<div className="p-6">
					<div className="flex flex-row">
						<img className="w-28 h-60 bg-cover mr-4"
							src={imageUrl} alt={title}
							style={{backgroundImage: "url('/static/media/poster.jpg')"}}
						/>
						<div>
							<h1 className="p-1 font-bold text-3xl">{title}</h1>
							<div className="flex flex-row p-1">
								<p className="mr-4">Genre: GENRE</p>
								<p className="mr-4">MPAA-US film rating: MPAA RATING</p>
								<p className="mr-4">Release Data: {date}</p>
								<p className="mr-4">Rating: {rating}</p>
							</div>
							<p className="p-1">{description}</p>
						</div>
					</div>
					<div>
						<h1>Trailer</h1>
						<iframe width={700} height={400}
							src="https://www.youtube.com/embed/tgbNymZ7vqY"
						/>
					</div>
					<div>
						<ul>
							<li>Cast</li>
						</ul>
						<p>Director</p>
						<p>Producer</p>
						<ul>
							<li>Reviews</li>
						</ul>
						<p>SHOW DATES AND TIMES</p>
					</div>
				</div>
			</div>
		</div>
   	);
};

export default Info;