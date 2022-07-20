import { useRouter } from 'next/router'

// our-domain.com/news/something-important

function DeatilPage(){
    const router = useRouter()

    // console.log(router.query.newsId);

    const newsid = router.query.newsId;

    // Extracting Dynamic Route Data
    // send a request to the backend API
    // to fetch the news item with newsId

    return <h1>Hi from Deatils Page</h1>
}

export default DeatilPage;
