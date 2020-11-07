import React from 'react'

export const UserContext = React.createContext({username: '', setUsername: () => {}})

export class UserProvider extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            setUsername: () => {}
        }
    }

    componentDidMount(){
        let defaultUser = window.localStorage.getItem('username') ?? "Anonimo"
        this.setState({
            username: defaultUser,
            setUsername: (usuario) => {
                this.setState({username: usuario})
                window.localStorage.setItem('username', usuario)
            }
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

