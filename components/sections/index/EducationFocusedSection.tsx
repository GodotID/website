import React from 'react';
// Components
import Flex from '@components/Primitives/Flex';

export default function EducationFocusedSection() {
    return (
        <Flex direction={1}>
            {/* Change <span> to something that could color text */}
            <span><small><b>Education focused community</b></small></span>
            <h2>
                Game development<br />
                <span>bukan hanya profit,</span><br />
                kami percaya itu.
            </h2>
            <Flex gap={5}>
                <p>
                    Konsep game development untuk profit sangatlah<br />
                    kuno, sistem pay-to-win didalam industri gaming<br />
                    sudah sangat terkenal sebagai sistem yang tidak baik.<br />
                    Bahkan, saat ini sudah mulai bermunculan permainan-permainan<br />
                    play-to-earn dengan adanya sistem NFT.
                </p>
                <p>

                    Untuk membuat ekosistem yang berkelanjutan (sustainable),<br />
                    maka rakyat game developer Indonesia harus mengubah<br />
                    mindset profitnya menjadi menebar manfaat.<br />
                    Sulit memang, tapi kami bersedia memulainya.
                </p>
            </Flex>
        </Flex>
    )
}
