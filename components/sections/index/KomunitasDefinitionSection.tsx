import React from 'react';
import Flex from '@components/Primitives/Flex';

export default function KomunitasDefinitionSection() {
    return (<React.Fragment>
        <div style={{ marginTop: '5em' }}></div>
        <Flex gap={5}>
            <h1>
                Ko<br />
                mu<br />
                ni<br />
                tas<br />
            </h1>
            <Flex direction={1}>
                <h1>
                    Siapakah mereka?
                </h1>
                <Flex gap={5}>
                    <Flex direction={1}>
                        <p className="small">
                            Komunitas bukanlah sebuah perusahaan, berbeda sekali.
                        </p>
                        <p className="small">
                            Komunitas adalah sekumpulan individu yang membuat
                            ekosistem yang berkelanjutan, terus berputar dan
                            menebar manfaat. Saling membantu satu sama lain.
                        </p>
                        <p className="small">
                            Apakah ada pemimpinnya?<br />
                            Jelas pasti ada.
                        </p>
                    </Flex>
                    <h2><i>
                        &quot;Founder dan Co-Founder<br />
                        bukanlah orang yang<br />
                        membuat komunitas,<br />
                        tapi mereka hanyalah salah satu<br />
                        dari banyak orang yang<br />
                        menemukannya.&quot;
                    </i></h2>
                </Flex>
            </Flex>
        </Flex>
    </React.Fragment>);
}
