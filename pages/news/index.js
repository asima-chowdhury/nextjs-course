// our-domain.com/news
import Link from 'next/link';
import {Fragment} from 'react';

function NewsPage(){
    return (
        <Fragment>
            <h1>Hi from News Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        Next js is a great framework
                    </Link>
                </li>
                <li>
                    <Link href="/news/oo">
                        Something else
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;
