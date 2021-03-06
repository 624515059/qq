import { Component } from "react"
import App from '../App'
import { Alert } from 'antd'
import './index.css'
class NotFound extends Component {
    render() {
        return (
            <App>
                <div className="box minHeight">
                    <Alert
                        message="错误提示"
                        description="页面404"
                        type="error"
                        className="alertCss"
                    />
                </div>
            </App>
        )
    }
}

export default NotFound;