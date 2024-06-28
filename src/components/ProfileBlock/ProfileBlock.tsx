import { Button, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';

import * as Styles from './ProfileBlock.styles'

export default function ProfileBlock () {
    return (
        <Styles.ProfileBlock>
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
                            defaultBorderColor: '#fff',
                        },
                    },
                }}
            >
            <Link to="/sign-in/">
                <Button size="large">Sign In</Button>
            </Link>
            <Link to="/sign-up/">
                <Button size="large">Sign Up</Button>
            </Link>
            </ConfigProvider>
        </Styles.ProfileBlock>
    )
}