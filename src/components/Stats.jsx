import 'styles/components/stats.css'

const STATS = [
	{ value: '698', label: 'Anggota Telegram' },
	{ value: '290', label: 'Anggota Discord' },
	{ value: 'Maret 2021', label: 'Berdiri sejak' },
	{ value: '4', label: 'Game jam terselenggara' },
];

const Stats = () => {
	return (
		<section id="stats" className="stats__main" aria-label="Statistik komunitas">
			{STATS.map((stat) => (
				<div className="stats__item" key={stat.label}>
					<span className="stats__value">{stat.value}</span>
					<span className="stats__label">{stat.label}</span>
				</div>
			))}
			<p className="stats__caption">
				Diperbarui seiring pertumbuhan komunitas.
			</p>
		</section>
	);
};

export default Stats;
