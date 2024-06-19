import { Input, Button, ConfigProvider } from 'antd';

import * as Styles from './ArticlesCreate.styles'

const { TextArea } = Input;
export default function ArticlesCreate () {
    return (
        <Styles.ArticlesCreate>
            <Styles.Title>
                Create new article
            </Styles.Title>
            Title
            <Input placeholder="Title" />
            <br />
            <br />
            Short description
            <Input placeholder="Title" />
            <br />
            <br />
            Text
            <TextArea rows={7} placeholder="Text" maxLength={10000} />
            <br />
            <br />
            Tags
            <Styles.WrapperTags>
                <Input
                  placeholder="Tag"
                  style={{ width: 300 }}
                />
                <Button
                  danger
                  size="large"
                >
                Delete
                </Button>
                <ConfigProvider
                  theme={{
                    components: {
                        Button: {
                            defaultBorderColor: '#1890FF',
                            defaultColor: '#1890FF',
                        },
                    },
                  }}
                >
                    <Button size="large">Add tag</Button>
                </ConfigProvider>
                    <br />
                    <br />
            </Styles.WrapperTags>
            <Button type="primary" size="large" style={{ width: 320 }}>Send</Button>
        </Styles.ArticlesCreate>
    )
}