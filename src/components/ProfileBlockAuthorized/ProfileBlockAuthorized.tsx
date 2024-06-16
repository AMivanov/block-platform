import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

import { ReactComponent as NoAvatar } from '../../images/noAvatar.svg'

import * as Styles from './ProfileBlockAuthorized.styles'

export default function ProfileBlockAuthorized () {
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
                    <Button
                      size="small"
                    >
                        Create article
                    </Button>
                </Link>
            </ConfigProvider>
            <Styles.UserName>
                John John
            </Styles.UserName>
            <Styles.Avatar>
                <NoAvatar />
            </Styles.Avatar>
            <Button
              size="large"
            >
                Log Out
            </Button>
        </Styles.ProfileBlockAuthorized>
    )
}