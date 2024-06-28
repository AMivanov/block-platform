import { Link } from 'react-router-dom';

import ProfileBlock from '../ProfileBlock';
import { useAppSelector } from '../../shared/hooks';
import ProfileBlockAuthorized from '../ProfileBlockAuthorized';

import * as Styles from './Header.styles'

export default function Header () {
    const user = useAppSelector((state) => state.localReducer.user)
    const userVerification = Object.keys(user).length === 0
    return (
        <Styles.Header>
            <Link to="/articles/">RealWorld Blog</Link>
            {userVerification ? (
                <ProfileBlock />
            ) : (
                <ProfileBlockAuthorized />
            )}
        </Styles.Header>
    )
}