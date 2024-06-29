import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

import { ReactComponent as NoAvatar } from '../../shared/images/noAvatar.svg'
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { logOutUser } from '../../redux/actions/localActions';

import * as Styles from './ProfileBlockAuthorized.styles'

export default function ProfileBlockAuthorized () {
    const user = useAppSelector((state) => state.localReducer.user)
    const dispatch = useAppDispatch()

    const handleLogout = () => {
        dispatch(logOutUser())
    }

    return (
        <Styles.ProfileBlockAuthorized>
            <ConfigProvider
              theme={{
                    token: {
                    },
                    components: {
                        Button: {
                            defaultHoverBorderColor: '#52C41A',
                            defaultHoverColor: '#52C41A',
                            defaultActiveBorderColor: '#52C41A',
                            defaultActiveColor: '#52C41A',
                            defaultBorderColor: '#52C41A',
                            defaultColor: '#52C41A',
                        },
                    },
                }}
            >
                <Link to="/create-article/">
                    <Button size="small">Create article</Button>
                </Link>
            </ConfigProvider>
            <Styles.UserName>
                {user.username}
            </Styles.UserName>
            <Link to="/profile/">
                <Styles.Avatar>
                    {user.image ? (
                        <Styles.ActiveAvatar src={user.image} alt="" />
                    ) : (
                        <NoAvatar />
                    )}
                </Styles.Avatar>
            </Link>
            <Button size="large" onClick={handleLogout}>Log Out</Button>
        </Styles.ProfileBlockAuthorized>
    )
}