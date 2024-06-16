import { Link } from 'react-router-dom';

import ProfileBlock from '../ProfileBlock';
import ProfileBlockAuthorized from '../ProfileBlockAuthorized';

import * as Styles from './Header.styles'

export default function Header () {
    return (
        <Styles.Header>
            <Link to="/articles/">RealWorld Blog</Link>
            <ProfileBlock />
            <ProfileBlockAuthorized />
        </Styles.Header>
    )
}