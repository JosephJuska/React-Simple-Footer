import { Helmet } from 'react-helmet';

export function NoPage() {
    return(
        <>
            <Helmet>
                <title>404-Page Not Found</title>
            </Helmet>
            <div>Error 404 - Page Not Found</div>
        </>
    );
}