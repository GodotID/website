import React from 'react';
import Flex from '@components/Primitives/Flex';

export default function VisiMisiSection() {
    // TODO: [45] Change this inline style into something
    // TODO: [47] Change <span> to something that could color text
    return (<React.Fragment>
        <div style={{ marginTop: '5em' }}></div>
        <Flex direction={1}>
            <span><small><b>Visi dan misi terbentuknya GodotID</b></small></span>
            <Flex gap={10}>
                <div>
                    <h3>
                        Menggunakan game development<br />
                        sebagai <b>entry point</b> untuk<br />
                        masuk dunia programming.<br />
                    </h3>
                    <h1>Visi</h1>
                </div>
                <div>
                    <ul>
                        <li>Mensosialisasikan komunitas ke orang tua atau wali</li>
                        <li>Membuat webinar dan event-event menarik</li>
                        <li>Membuka kesempatan untuk berkontribusi bagi anggota</li>
                    </ul>
                    <h1>Misi</h1>
                </div>
            </Flex>
        </Flex>
    </React.Fragment>)
}
