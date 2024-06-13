import { Button, Checkbox, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';
import { Link } from 'react-router-dom';

import * as Styles from './SignUpPage.styles'

export default function SignUpPage (props: any) {
    const { isSignUp = false } = props;
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
            <Styles.SignUpPage>
                <Styles.Title>
                    {isSignUp ? 'Create new account' : 'Sign In'}
                </Styles.Title>
                {isSignUp && (
                    <>
                        Username
                        <Styles.Input
                          type="text"
                          placeholder="Username"
                        />
                    </>
                )}
                Email address
                <Styles.Input
                  type="email"
                  placeholder="Email address"
                />
                Password
                <Styles.Input
                  type="password"
                  placeholder="Password"
                />
                {isSignUp && (
                    <>
                        Repeat password
                        <Styles.Input
                          type="password"
                          placeholder="Password"
                        />
                        <Styles.Divider />
                        <ConfigProvider
                          theme={{
                                token: {
                                    fontFamily: 'RobotoRegular',
                                    fontSize: 14,
                                    // lineHeight: 22,
                                    colorText: '#595959',
                                },
                          }}
                        >
                            <Checkbox onChange={onChange}>I agree to the processing of my personal information</Checkbox>
                        </ConfigProvider>
                    </>
                )}
                <Styles.PositionButton>
                    <Button
                      type="primary"
                      block
                      size="large"
                    >
                        {isSignUp ? 'Create' : 'Login'}
                    </Button>
                </Styles.PositionButton>
                <Styles.FooterWrapper>
                    <Styles.Text>
                        {isSignUp ? 'Already have an account?' : 'Dont have an account?'}
                    </Styles.Text>
                    <Styles.SignHref>
                        <Link to={isSignUp ? '/sign-in' : '/sign-up'}>
                            {isSignUp ? 'Sign In.' : 'Sign Up.'}
                        </Link>
                    </Styles.SignHref>
                </Styles.FooterWrapper>
            </Styles.SignUpPage>
    )
}