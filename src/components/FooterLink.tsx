import { Link } from 'react-router-dom';

export function FooterLink({to, children, ...props}: any){
    return(
        <Link to={to} {...props}>
            {children}
        </Link>
    );
}