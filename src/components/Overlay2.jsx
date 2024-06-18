import React from 'react';

export default function Overlay2(props) {

	const [isLoading, setIsLoading] = useState(true)

	const overlayAnimation = () => {
		const tl = gsap.timeline({
			delay: -2,
		});
		tl.to(".intro__overlay-line", {
			duration: 3.5,
			width: "25vw",
			ease: "expo.inOut",
			// delay: -0.8,
		})
			.to(".intro__overlay-line", {
				duration: 2,
				width: 0,
				ease: "expo.inOut",
				// delay: -0.8,
			})
			.to(".intro__overlay", { duration: 0, css: { display: "none" } });
	};

	useEffect(() => {

		setIsLoading(false);
		setIsLoading(true);

	}, [props])


	useEffect(() => {

		if (isLoading) {
			const tl = gsap.timeline({
				delay: -2,
			});
			tl.to(".intro__overlay-line", {
				duration: 3.5,
				width: "25vw",
				ease: "expo.inOut",
				// delay: -0.8,
			})
				.to(".intro__overlay-line", {
					duration: 2,
					width: 0,
					ease: "expo.inOut",
					// delay: -0.8,
				})
				.to(".intro__overlay", { duration: 0, css: { display: "none" } });
		}

	}, [isLoading, setIsLoading])


	return (
		<React.Fragment>
			{setIsLoading ? (
				<div className="intro__overlay">
					<div className="intro__overlay-line">&nbsp;</div>
					<div className="intro__overlay-line">&nbsp;</div>
					<div className="intro__overlay-line">&nbsp;</div>
					<div className="intro__overlay-line">&nbsp;</div>
				</div>
			) : (
				<React.Fragment>

				</React.Fragment>
			)}
		</React.Fragment>
	);
}
