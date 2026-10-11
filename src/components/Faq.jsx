import 'styles/components/faq.css'

const FAQ_ITEMS = [
	{
		question: 'Apa itu Godot Engine?',
		answer: 'Godot Engine adalah perangkat lunak untuk membuat game yang terbuka dan gratis. Siapa pun bebas membaca, memakai, dan mengubah isinya, jadi setiap ide punya jalan yang lapang untuk tumbuh menjadi karya yang selesai.',
	},
	{
		question: 'Perlu bisa coding dulu untuk gabung?',
		answer: 'Pengalaman coding bukan syarat untuk bergabung. Kami semua di sini memulai dari titik yang berbeda-beda dan tumbuh bersama-sama, jadi kamu bisa langsung masuk lalu menemukan caranya sambil berjalan.',
	},
	{
		question: 'Apakah komunitas ini berbayar?',
		answer: 'Komunitas ini gratis dan terbuka untuk siapa saja, karena tujuannya memang membuka akses belajar seluas mungkin.',
	},
	{
		question: 'Ada syarat usia?',
		answer: 'Usia berapa pun boleh memakai Godot Engine dan ikut bergabung, karena yang menentukan seberapa jauh seseorang melangkah adalah kemauan untuk mencoba.',
	},
	{
		question: 'Apakah boleh ikut kalau masih pemula?',
		answer: 'Tentu saja boleh. Kami terbuka untuk semua tingkat kemampuan, dan di situlah komunitas bekerja paling baik: setiap pertanyaan disambut hangat, dan pertanyaan yang paling sederhana sering kali membuka pelajaran yang paling berharga.',
	},
	{
		question: 'Bahasa apa yang dipakai di grup?',
		answer: 'Bahasa Indonesia. Semua diskusi kami jalankan dalam bahasa Indonesia, supaya setiap orang bisa langsung bertanya dengan cara yang paling nyaman dan mengikuti setiap percakapan tanpa hambatan.',
	},
];

const Faq = () => {
	return (
		<section id="faq" className="faq__main">
			<h2 className="faq__header">
				FAQ
			</h2>
			<div className="faq__list">
				{FAQ_ITEMS.map((item) => (
					<details className="faq__item" key={item.question}>
						<summary className="faq__question">{item.question}</summary>
						<p className="faq__answer">{item.answer}</p>
					</details>
				))}
			</div>
		</section>
	);
};

export default Faq;
