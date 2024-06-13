import { Button, ConfigProvider } from 'antd';

export default function AuthorizationContainer () {
    return (
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
            <Button
              size="large"
            >
                Sign In
            </Button>
            <Button
              size="large"
            >
                Sign Up
            </Button>
        </ConfigProvider>
    )
}