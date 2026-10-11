import { memo, useEffect, useRef, useState } from 'react';

import Visi from 'components/Visi'
import Misi from 'components/Misi'

import 'styles/components/visimisi.css'

// Fraction of the pinned travel where the crossfade starts. From that point on
// the Misi layer is the reachable one and Visi steps aside. Keep this in sync
// with the --vm-fade-start value in visimisi.css, which drives the actual fade.
const FADE_START = 0.25;

// The track is pinned by CSS (sticky stage inside a tall track). This hook
// publishes how far the track has been scrolled as a single custom property on
// the track element, so the whole sequence is computed by CSS on the compositor
// thread and React never re-renders while the user scrolls. The returned phase
// only flips twice per pass, at the moment the crossfade takes over.
function usePinnedProgress(trackRef) {
	const [phase, setPhase] = useState('visi');

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		let frame = 0;

		const measure = () => {
			frame = 0;

			const rect = track.getBoundingClientRect();
			const travel = rect.height - window.innerHeight;

			// The stage is not pinned (mobile or reduced motion), so there is
			// no travel to report and the CSS fallback already applies.
			if (travel <= 0) return;

			const progress = Math.min(1, Math.max(0, -rect.top / travel));
			track.style.setProperty('--vm-p', progress.toFixed(4));
			setPhase(progress >= FADE_START ? 'misi' : 'visi');
		};

		const requestMeasure = () => {
			if (frame === 0) frame = window.requestAnimationFrame(measure);
		};

		measure();
		window.addEventListener('scroll', requestMeasure, { passive: true });
		window.addEventListener('resize', requestMeasure);

		return () => {
			if (frame !== 0) window.cancelAnimationFrame(frame);
			window.removeEventListener('scroll', requestMeasure);
			window.removeEventListener('resize', requestMeasure);
		};
	}, [trackRef]);

	return phase;
}

const VisiMisi = () => {
	const trackRef = useRef(null);
	const phase = usePinnedProgress(trackRef);

	return (
		<section className="visimisi__track" ref={trackRef} aria-label="Visi dan Misi">
			<div className="visimisi__stage">
				{/* The anchors carry the hash targets. They sit outside the layers
				    so jumping to #misi lands after the crossfade instead of on
				    top of the still pinned Visi. */}
				<div id="visi" className="visimisi__anchor visimisi__anchor--visi" />

				<div
					className="visimisi__layer visimisi__layer--visi"
					aria-hidden={phase !== 'visi'}
					inert={phase !== 'visi'}
				>
					<Visi />
				</div>

				<div id="misi" className="visimisi__anchor visimisi__anchor--misi" />

				<div
					className="visimisi__layer visimisi__layer--misi"
					aria-hidden={phase !== 'misi'}
					inert={phase !== 'misi'}
				>
					<Misi />
				</div>
			</div>
		</section>
	);
};

export default memo(VisiMisi);
