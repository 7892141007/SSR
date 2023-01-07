import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
    componentDidMount() {
        console.log('$$ mounted');
        this.props.fetchUser();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li>{user.name}</li>
        });
    }

    render() {
        console.log('$$$ this.props.users', this.props.users);
        return (
            <div>
                User list component
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('$$ state', state.users);
    return { users: state.users || [] };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);