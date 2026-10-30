import { useEffect, useState } from 'react';
 
export const useRoute = () => {
    const [path, setPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname)
        }

        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }

    }, [])
    return path
}

export const navigate = (to) => {
    history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const Router = (props) => {
    const { routes } = props
    const path = useRoute()
    const Page = routes[path] ?? routes['*']

return <Page />;
}

export default Router