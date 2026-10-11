import 'styles/components/faq.css'

const FAQ_ITEMS = [
	{
		question: 'Apa itu Godot Engine?',
		answer: 'Godot Engine adalah perangkat lunak untuk membuat game yang terbuka dan gratis. Siapa pun boleh membaca, memakai, dan mengubah isinya, jadi biaya lisensi tidak pernah menjadi penghalang antara sebuah ide dan karya yang selesai.',
	},
	{
		question: 'Perlu bisa coding dulu untuk gabung?',
		answer: 'Tidak perlu. Kami semua di sini memulai dari titik yang berbeda-beda dan belajar bersama-sama, jadi kamu bisa bergabung lebih dulu lalu mencari tahu caranya sambil berjalan.',
	},
	{
		question: 'Apakah komunitas ini berbayar?',
		answer: 'Tidak. Komunitas ini terbuka untuk siapa saja dan tidak menarik biaya sepeserpun, karena tujuannya memang membuat akses belajar seluas mungkin.',
	},
	{
		question: 'Ada syarat usia?',
		answer: 'Tidak ada. Usia berapa pun boleh memakai Godot Engine dan ikut bergabung, karena yang menentukan seberapa jauh seseorang melangkah adalah kemauan untuk mencoba, bukan tahun kelahirannya.',
	},
	{
		question: 'Apakah boleh ikut kalau masih pemula?',
		answer: 'Tentu saja boleh. Kami terbuka untuk semua tingkat kemampuan, dan justru di situlah gunanya sebuah komunitas: pertanyaan yang terasa memalukan untuk ditanyakan di tempat lain biasanya paling sering dibahas di sini.',
	},
	{
		question: 'Bahasa apa yang dipakai di grup?',
		answer: 'Bahasa Indonesia. Semua diskusi kami jalankan dalam bahasa Indonesia, supaya tidak ada yang perlu menyusun pertanyaannya dalam bahasa asing lebih dulu sebelum berani bertanya.',
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
