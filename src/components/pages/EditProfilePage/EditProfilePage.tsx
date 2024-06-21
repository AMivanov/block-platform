import { Button } from 'antd';

import * as Styles from './EditProfilePage.styles'

export default function EditProfilePage() {
    return (
        <Styles.EditProfilePage>
            <Styles.Title>
                Edit Profile
            </Styles.Title>
            Username
            <Styles.Input
              type="text"
              placeholder="Username"
            />
            Email address
            <Styles.Input
              type="email"
              placeholder="Email address"
            />
            New password
            <Styles.Input
              type="password"
              placeholder="Password"
            />
            Avatar image (url)
            <Styles.Form>
                <Styles.Input
                  type="text"
                  placeholder="Avatar Image"
                />
            </Styles.Form>
            <Styles.PositionButton>
                <Button
                  type="primary"
                  block
                  size="large"
                >
                    Save
                </Button>
            </Styles.PositionButton>
        </Styles.EditProfilePage>
    )
}